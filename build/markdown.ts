import MarkdownIt from 'markdown-it';
import MdAnchor from 'markdown-it-anchor';
import hljs from 'highlight.js';
const mdPlugin = require('@black-kro/vite-plugin-markdown');

const md = MarkdownIt({
    html: true,
    highlight(str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value
            } catch (error) {
                console.log(error);
            }
        }
    }
}).use(MdAnchor, {
    lavel: 2,
    permalink: true,
    permalinkSymbol: '#',
    permalinkBefore: true,
    permalinkClass: 'permalink'
});

const plugin = mdPlugin({
    mode: 'vue',
    markdownIt: md,
});

export default plugin;
