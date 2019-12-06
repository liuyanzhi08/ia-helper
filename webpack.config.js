const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: {
    content: './src/scripts/content.js',
	background: './src/scripts/background.js',
  },
  output: {
	path: path.resolve(__dirname, 'dist'),
	filename: '[name].js',
  },
  plugins: [
	new CopyPlugin([
	  { from: 'manifest.json', to: 'manifest.json' },
	  { from: 'src/images/icon.png', to: 'icon.png' },
	  { from: 'src/popup/popup.html', to: 'popup.html' },
	  { from: 'src/popup/popup.js', to: 'popup.js' },
	]),
  ],
};
