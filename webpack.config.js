const path = require('path');
const HtmlWebpackPlugin = require('webpack-html-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  filename: 'index.html',
  template: path.resolve(__dirname, 'app/index.html'),
  inject: 'body'
});

module.exports = {
  entry: './app/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    loaders: [
      { test: /.jsx?/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /.scss$/, exclude: /node_modules/, loaders: ['style', 'css', 'sass'] }
    ]
  },

  devtool: "source-map",

  plugins: [HtmlWebpackPluginConfig]
};
