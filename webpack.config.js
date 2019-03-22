'use strict'

const { resolve } = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
    entry: resolve(__dirname, "src", "index"),
    mode: "development",
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    output: {
        path: resolve(__dirname, "build"),
        filename: "[name]-[hash].js",
    },

    devServer: {
        port: 3031,
        contentBase: resolve(__dirname, "build"),
        historyApiFallback: true,
        inline: true,
        hot: true

    },

    module:{
        rules:[
            {
                test: /\.(ts|tsx|js|jsx)/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './public/index.html'}),
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        minimizer: [new UglifyJsPlugin()],
      },

}