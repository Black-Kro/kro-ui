const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
    plugins: [
        tailwindcss(),
        purgecss({
            
            content: [ `./src/**/*.scss`, `./public/**/*.html`, `./src/**/*.vue`, './docs/**/*.vue', './packages/**/*.vue', './packages/**/*.scss', './docs/**/*.scss', './docs/**/*.md' ],
            defaultExtractor (content) {
                const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
                return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
            },
            whitelist: ['html'],
            whitelistPatterns: [ /-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).+-move$/, /^router-link(|-exact)-active$/, /data-v-.*/, /kro/, /hljs/, /-webkit-scrollbar/ ],
        }),
        autoprefixer(),
    ]
}