module.exports = {
    devServer: {
        proxy: {
            '/development': {
                target: 'https://xkcd.com',
                pathRewrite: {'^/development' : ''}
            }
        }
    }
}