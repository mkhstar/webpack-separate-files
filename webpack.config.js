const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// Extract CSS
const extractCSS = new ExtractTextPlugin('style.css');
const config = {
  mode: 'none',
  entry: './src/js/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  plugins: [
    extractCSS
  ],
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.scss$/,
        use: extractCSS.extract([
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ])
      }
    ]
  }
}
module.exports = config;