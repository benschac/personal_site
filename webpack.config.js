const path = require('path')
    , HtmlWebpackPlugin = require('html-webpack-plugin')
    , { CleanWebpackPlugin } = require('clean-webpack-plugin')
    ;

module.exports = () => {
  return {
    entry: './src/index.js'
    , output: {
        filename: 'main.js'
        , path: path.resolve(__dirname, 'dist')
    }
    , module: {
        rules: [
          {test: /\.js$/, exclude: '/node_modules/', loader: 'babel-loader'}
          , {test: /.css$/, use: ['style-loader', 'css-loader']}
        ]
    }
    , plugins: [
      new CleanWebpackPlugin()
      , new HtmlWebpackPlugin({
        template: './src/index.html'
        , title: 'Benjamin Y. Schachter'
      })
    ]
    , devtool: 'inline-source-map'
    , mode: 'development'
    , devServer: {
        port: 9000
        , compress: true
        , contentBase: './dist'
    }
  }
}