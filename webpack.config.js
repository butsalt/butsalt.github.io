var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        page: './src/index.js'
    },
    output: {
        path: './dist',
        filename: '[name].js',
        libraryTarget: "var",
        library: "[name]"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel?optional[]=runtime'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract( 'css-loader?minimize&sourceMap' )
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        new webpack.optimize.UglifyJsPlugin()
    ],
    devtool: 'source-map'
};