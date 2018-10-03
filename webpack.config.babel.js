import '@babel/polyfill';
import path from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';

module.exports = {
	entry: './src/index.js',
	mode: 'development',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
			}
		},
		{
			test: /\.html$/,
			use: [
				{
					loader: 'html-loader',
					options: { minimize: true },
				},
			],
		},
	]
	},
	devtool: 'source-map',
	plugins: [
		new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
	]
};