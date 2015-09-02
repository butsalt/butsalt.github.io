module.exports = {
    entry: './src/index.js',
    output: {
        path: './dist',
        filename: 'page.js',
        libraryTarget: "var",
        library: "page"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel?optional[]=runtime'
            }
        ]
    },
    devtool: 'source-map'
};