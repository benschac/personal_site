import '@babel/polyfill';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebPackPlugin from 'html-webpack-plugin';


const devMode = process.env.NODE_ENV !== 'production';


module.exports = {
	entry: './src/index.js',
	mode: 'development',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
		{
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
		{
			test: /^((?!\.global).)*\.s?[ac]ss$/,
			use: [
				devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
				{
					loader: 'css-loader',
					options:
					{
						sourceMap: true,
						modules: true,
						localIdentName: '[local]___[hash:base64:5]',
						importLoaders: 1,
					},
				},
				'postcss-loader',
			],
		},
		{
			test: /\.global\.css$/,
			use: [
				devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
				{
					loader: 'css-loader',
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