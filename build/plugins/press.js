const MarkdownIt = require('markdown-it');
const Cheerio = require('cheerio');
const hljs = require('highlight.js');
const loaderUtils = require('loader-utils');

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
};

module.exports = function markdownToVueLoader(source, map) {

    const markdown = new MarkdownIt(MarkdownItOptions);
    const $source = Cheerio.load(markdown.render(source), CheerioOptions);

    const $template = Cheerio.load(`<template></template>`);
    const $target = $template('body');


    const meta = {
        headings: [

        ]
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

    $template('body').append(`
        <script>
            import { useMeta } from '@kro-press/composables/useMeta'

            export default {
                setup(props, { emit }) {
                    const { meta } = useMeta();
                    const metaData = JSON.parse('${JSON.stringify(meta)}');

                    meta.value = metaData;
                    
                    return {
                        metaData
                    }
                }
            }
        </script>
    `);

    this.callback(null, $template('body').html(), map);
};