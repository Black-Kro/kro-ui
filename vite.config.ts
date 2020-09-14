import { UserConfig } from 'vite';
import path from 'path';
import voie from 'vite-plugin-voie';
import hljs from 'highlight.js';

const mdPlugin = require('@black-kro/vite-plugin-markdown');

const alias = {
    '/~/': path.resolve(__dirname, 'src')
}

const config: UserConfig = {
    alias,
    plugins: [
        mdPlugin({
            mode: 'vue',
            markdownIt: {
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
            }
        }),
        voie({
            pagesDir: 'docs/pages',
            extensions: ['md', 'vue']
        }),
    ]
}

export default config;
