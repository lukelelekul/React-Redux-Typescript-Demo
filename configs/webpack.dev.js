const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',

  entry: {
    index: ['babel-polyfill', path.join(__dirname, '../src/index.tsx')],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.html'),
      title: 'React for Lukelele',
      debug: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ESLintPlugin({
      files: 'src/**/*',
      fix: true,
      exclude: ['src/**/*.scss', 'src/redux/types.ts'],
    }),
  ],

  devtool: 'eval-cheap-module-source-map',

  devServer: {
    port: 4000,
    host: '0.0.0.0',
    hot: true,
    contentBase: '../dist',
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|dist)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              configFile: 'tsconfig.dev.json',
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'thread-loader',
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
});
