var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var prod = process.argv.indexOf('-p') !== -1;

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/main.js'),
        styles: path.resolve(__dirname, './src/styles/styles.scss')
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
            test: /(\.css|\.scss)$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
        }, {
            test: /(\.ts|\.js)$/,
            use: 'awesome-typescript-loader'
        }]
    },
    plugins: [
        new ExtractTextPlugin({ filename: 'styles.css' }),
        new HtmlWebpackPlugin({
            title: "Webpack App",
            template: './src/index.html',
            filename: "./index.html",
            chunks: prod ? ['main'] : 'all',
        })
        ]
};