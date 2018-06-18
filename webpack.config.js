const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './lib'),
    publicPath: '/lib/',
    filename: 'index.js',
    library: ['vueLoading'],
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(['css-loader'])
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {}
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.', '.js', '.vue', '.json']
  },
  plugins: [
    new ExtractTextPlugin('vue-css-loading.css'),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    })
  ]
}
