const webpakc = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',

  devtool: 'eval-cheap-module-source-map',

  entry: {
    index: ['babel-polyfill', path.join(__dirname, '../src/index.tsx')],
  },

  output: {
    filename: '[name].[contenthash].js',
    publicPath: '.',
    chunkFilename: '[name].[contenthash].js',
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'lib.[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.html'),
      title: 'React for Lukelele',
      debug: false,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 5,
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
});
