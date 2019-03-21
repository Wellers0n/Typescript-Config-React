'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
    entry: path.resolve(__dirname, "src", "index"),
    mode: "development",
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
        publicPath: "/static/"
    },

    devServer: {
        port: 3030,
        historyApiFallback: {
            index: './public/index.html'

        },
        inline: true,
    },

    module:{
        rules:[
            {
                test: /\.(ts|tsx|js|jsx)/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    optimization: {
        minimizer: [new UglifyJsPlugin()],
      },

}