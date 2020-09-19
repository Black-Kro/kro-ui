import PurgeIcons from 'vite-plugin-purge-icons';
import ViteMarkdown from '@black-kro/vite-plugin-markdown';
import Voie from 'vite-plugin-voie';
import path from 'path';
import { UserConfig } from 'vite';

const alias = {
    '/~/': path.resolve(__dirname, 'src')
}

const config: UserConfig = {
    alias,
    plugins: [
        ViteMarkdown(),
        Voie({
            pagesDir: 'docs/pages',
            extensions: ['md', 'vue']
        }),
        PurgeIcons(),
    ]
}

export default config;
