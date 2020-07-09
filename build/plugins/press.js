const MarkdownIt = require('markdown-it');
const Cheerio = require('cheerio');
const hljs = require('highlight.js');
const loaderUtils = require('loader-utils');
const fs = require('fs');
const path = require('path');

const MATCH_METADATA    = /---\n(.|\n)*\n---/mi;
const MATCH_USAGE       = /<usage (.*) \/>/gmi;
const MATCH_UP_NEXT     = /<up-next (.*) \/>/gmi;
const MATCH_API         = /<api \/>/gmi;

/**
 * @returns MarkdownIt.MarkdownItConstructor
 */
const MarkdownItOptions = {
    html: true,
    linkify: true,
    typographer: true,
};

const CheerioOptions = {
    decodeEntities: false,
    lowerCaseAttributeNames: false,
    lowerCaseTags: false,
    recognizeSelfClosing: false,
};

/**
 * 
 * @param {string} source 
 * @param {*} map 
 */
module.exports = function markdownToVueLoader(source, map) {
    const rawRequset = loaderUtils.getCurrentRequest(this).split('!')[1].split('?')[0];
    const rawRequsetPath = rawRequset.substring(0, rawRequset.lastIndexOf('/'));
    
    source = source.replace(MATCH_USAGE, (x, attrs) => `<usage ${attrs}></usage>`);
    source = source.replace(MATCH_UP_NEXT, (x, attrs) => `<up-next ${attrs}></up-next>`);
    source = source.replace(MATCH_API, (x, attrs) => `<docs-component-metadata :metadata="metadata.options.component"></docs-component-metadata>`)

    const metadataRaw = source.match(MATCH_METADATA);
    let options = {};

    if (metadataRaw) {
        const metaDataOptions = metadataRaw[metadataRaw.index].replace(/(---\n|---)/mig, '').split(/\n/);

        options = metaDataOptions
            .filter(option => option)
            .reduce((obj, option) => {
                const [key, value] = option.split(/:(.+)/);
                obj[key.trim().toLowerCase()] = value.trim();
                return obj;
            }, {});

        source = source.replace(MATCH_METADATA, '');
    }


    const markdown = new MarkdownIt(MarkdownItOptions);

    const $source = Cheerio.load(markdown.render(source), CheerioOptions);
    const $template = Cheerio.load(`<template></template>`, {
        recognizeSelfClosing: false,
    });
    const $target = $template('body');

    const meta = {
        options: {
            ...options,
        },
        headings: [

        ],
    }

    /**
     * Replace code in source before moving it to template as doing 
     * it after moving it to the template causes rendering issues.
     */
    $source('pre').each((i, pre) => {
        const $pre = $source(pre);

        $pre.children('code').each((i, code) => {
            const $code = $source(code);
        
            const language = $code.attr('class').split('-')[1];
            $code.text(hljs.highlight(language, $code.text()).value);
        });
    });

    $target.append($template('head').children());

    /**
     * Get all style elements from source and append to body.
     */
    $source('style').each((i, style) => $target.append($source(style)));
    
    /**
     * Append the content to the template.
     */
    $template('template').append(`<div>${$source('body').html()}</div>`);
    $template('script').append('alert("Hello world");');

    /**
     * Replace Header Elements with Custom KroPress Header
     */
    $template('template h1, template h2, template h3').each((i, el) => {
        const $heading = $template(el);
        const text = encodeURIComponent($heading.text().toLowerCase().replace(/\s/g, '-'));

        if (el.tagName !== 'h1')
            meta.headings.push({
                name: el.tagName,
                text: $heading.text(),
                hash: text,
            });

        $heading.wrap('<press-article-heading></press-article-heading>').prepend(`<a href="#${text}">#</a>`);
        $heading.attr('id', text);
    });

    let componentImports = ``;
    let componentDecs = ``;

    /**
     * Replace all <usage name="Component" /> tags with actual components.
     */
    $template('usage').each((i, el) => {
        const $usage = $template(el);
        
        const name = $usage.attr('name');
        const title = $usage.attr('title');
        const tag = name
                        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
                        .map(x => x.toLowerCase())
                        .join('-');

        componentImports += `
            import { default as ${name} } from './examples/${name}.vue';
        `;

        componentDecs += `${name}, `;

        // Load raw component code.
        const rawFileContents = fs.readFileSync(path.join(rawRequsetPath, 'examples', `${name}.vue`)).toString();

        const code = hljs.highlight('html', rawFileContents).value;

        const replacement = `
            <docs-playground source="https://github.com/Black-Kro/kro-ui/tree/master/docs/pages${rawRequsetPath.split('pages')[1]}/examples/${name}.vue" title="${title}">
                <template #default>
                    <${tag}></${tag}>
                </template>
                <template #code>
                <pre><code>${code}</code></pre>
                </template>
            </docs-playground>`;

        $usage.replaceWith(replacement);
        
    });

    const script = `
        <script>
            let componentMetadata;
            import { useMeta } from '@kro-press/composables/useMeta';
            ${componentImports}

            ${ meta.options.for ? `componentMetadata = require("@lib/${meta.options.for}").Metadata` : '' }
    
            export default {
                components: {${componentDecs}},
                setup(props, { emit }) {
                    let metadata = JSON.parse('${JSON.stringify(meta)}');

                    if (componentMetadata)
                        metadata['options']['component'] = componentMetadata;

                    const { meta } = useMeta();
                        
                    meta.value = metadata;
                        
                    return {
                        metadata
                    }
                }
            }
        </script>
    `;

    $template('body').append(script);

    this.callback(null, $template('body').html(), map);
};