import Markdown from './build/markdown';
import PurgeIcons from 'vite-plugin-purge-icons';
import { UserConfig } from 'vite';
import Voie from 'vite-plugin-voie';
import path from 'path';

const alias = {
    '/~/': path.resolve(__dirname, 'src')
}

const config: UserConfig = {
    alias,
    plugins: [
        Markdown,
        Voie({
            pagesDir: 'docs/pages',
            extensions: ['md', 'vue']
        }),
        PurgeIcons(),
    ]
}

export default config;
