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
    highlight(src, lang) {
        return hljs.highlight(lang, src).value;
    }
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

    $target.append($template('head').children());

    /**
     * Get all style elements from source and append to body.
     */
    $source('style').each((i, style) => $target.append($source(style)));
    
    /**
     * Append the content to the template.
     */
    $template('template').append(`<div>${$source('body').html()}</div>`);

    /**
     * Replace Header Elements with Custom KroPress Header
     */
    $template('template h1, template h2, template h3').each((i, el) => {
        const $heading = $template(el);
        const text = encodeURIComponent($heading.text().toLowerCase().replace(' ', '-'));

        $heading.wrap('<press-article-heading></press-article-heading>').prepend(`<a href="#${text}">#</a>`);
        $heading.attr('id', text);
    })


    this.callback(null, $template('body').html(), map);
};