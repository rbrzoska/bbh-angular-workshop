var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/main.js'),
        styles: path.resolve(__dirname, './src/styles.css'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[hash].bundle.js'
    },
    module: {
        rules: [
            { test: /\.css$/ ,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader'],
                    fallback: 'style-loader'
                })}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html')
        }),
        new ExtractTextPlugin('styles.css')

    ]
};