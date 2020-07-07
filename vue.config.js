/** eslint-disable */
const path = require('path');

module.exports = {
    devServer: {
        progress: false,
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@lib': path.resolve(__dirname, 'src/'),
                '@docs': path.resolve(__dirname, 'docs/'),
                '@kro-press': path.resolve(__dirname, 'packages/press/'),
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
                            loader: './build/plugins/press',
                        },
                    ],
                },
            ],
        },
    },

    lintOnSave: false
};