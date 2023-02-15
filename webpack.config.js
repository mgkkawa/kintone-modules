const path = require('path')

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src', 'index'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      path: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
}
