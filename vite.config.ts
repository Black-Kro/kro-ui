import { UserConfig } from 'vite';
import MarkdownIt from 'markdown-it';
import MdAnchor from 'markdown-it-anchor';
import path from 'path';
import voie from 'vite-plugin-voie';
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
})

const alias = {
    '/~/': path.resolve(__dirname, 'src')
}

const config: UserConfig = {
    alias,
    plugins: [
        mdPlugin({
            mode: 'vue',
            markdownIt: md,
        }),
        voie({
            pagesDir: 'docs/pages',
            extensions: ['md', 'vue']
        }),
    ]
}

export default config;
