var webpack = require('webpack');
var path = require('path');
var libraryName = 'Ambyint';
var outputFile = libraryName + '.js';

var env = process.env.WEBPACK_ENV;



var config = {
  entry: __dirname + '/src/index.js',
  devtool: env === 'prod' ? undefined : 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.js)$/,
        loader: "babel-loader",
        exclude: /(node_modules)/
      },
      {
        test: /(\.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ]
  },
};

module.exports = config;