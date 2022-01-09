const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },

  devServer: {
    historyApiFallback: {
      // index: '/'
      index: 'index.html',
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
