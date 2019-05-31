const path = require('path')
    , HtmlWebpackPlugin = require('html-webpack-plugin')
    , CleanWebpackPlugin = require('clean-webpack-plugin')
    ;

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader'},
      { test: /.css$/, use: [
        'style-loader',
        'css-loader'
      ] },
      { test: /\.(png|svg|jpg|gif)$/, use: 'file-loader' }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   title: 'Development'
    // })
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};