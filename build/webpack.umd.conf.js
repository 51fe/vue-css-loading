const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.conf.js')
const path = require('path')
const webpack = require('webpack')

module.exports = merge(webpackBaseConfig, {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/lib/',
    filename: '[name].js',
    libraryExport: 'default',
    library: 'vueLoading',
    libraryTarget: 'umd'
  },
  externals: { vue: 'Vue' },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    })
  ]
});
