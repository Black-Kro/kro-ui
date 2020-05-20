module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.md$/i,
                    use: 'raw-loader'
                }
            ]
        }
    }
}