var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var nodeEnv = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
        entry: {
            app: path.join(__dirname, '..', 'app/main.js'),
        },

        output: {
            path: path.join(__dirname, '..', 'build'),
            filename: '[name].js',
        },
        module: {
            loaders: [
                { test: /\.js?$/, exclude: /node_modules/, loader: 'babel' },
              ],
            preLoaders: [
                { test: /\.js?$/, exclude: /node_modules/, loader: 'eslint-loader' },
              ]
            },
        // plugins:  [
        //   new HtmlWebpackPlugin({
        //     title: 'Webpack demo'
        //   })
        // ],
        resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js'],
    }
  };
