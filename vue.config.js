/** eslint-disable */

const path = require('path');
const hljs = require('highlight.js');

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@lib': path.resolve(__dirname, 'src/'),
                '@docs': path.resolve(__dirname, 'docs/'),
                '@kro-press': path.resolve(__dirname, 'press/'),
            }
        },

        module: {
            rules: [
                {
                    test: /\.md$/,
                    exclude: /(node_modules|bower_components)/,
                    use: [
                        'vue-loader',
                        {
                            loader: './build/plugins/markdown',
                            options: {
                                    configureMarkdownIt(md) {
                                      md.use(require('markdown-it-anchor'));
                                    }
                                
                            }
                        },
                    ],
                },
            ],
        },
    },

    lintOnSave: false
};