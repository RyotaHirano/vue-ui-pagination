import path from 'path';
import webpack from 'webpack';
const HtmlWebpackPlugin = require('html-webpack-plugin');
import { resolve } from 'path'
const rootResolve = pathname => resolve(__dirname, pathname);

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "",
    filename: 'assets/js/[name].js'
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.js'
    },
    extensions: ['.js', '.vue']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: `${rootResolve('src/html/index.pug')}`,
    })
  ],
  module: {
    noParse: /es6-promise\.js$/,
    rules: [
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        loader: 'pug-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: rootResolve('dist'),
    publicPath: '/',
    hot: true,
    host: '0.0.0.0'
  }
}