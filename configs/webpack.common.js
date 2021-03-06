const path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '.',
  },

  resolve: {
    modules: ['node_modules', path.join(__dirname, 'src')],
    alias: {
      '@dsm': path.resolve(__dirname, '../src/dsm'),
      '@models': path.resolve(__dirname, '../src/models'),
      '@redux': path.resolve(__dirname, '../src/redux'),
      '@components': path.resolve(__dirname, '../src/components'),
    },
    extensions: ['.ts', '.tsx', '.js', '.scss'],
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
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|dist)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico|cur|woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
};
