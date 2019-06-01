const path = require('path')
    , HtmlWebpackPlugin = require('html-webpack-plugin')
    , { CleanWebpackPlugin } = require('clean-webpack-plugin')
    , ManifestPlugin = require('webpack-manifest-plugin')
    , MiniCssExtractPlugin = require('mini-css-extract-plugin')
    , BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    ;
// Todo Production Checklist:
// CSS: - https://webpack.js.org/plugins/mini-css-extract-plugin

// When Analysing bundle size:
// http://webpack.github.com/analyse


// Todo: create common, development and production webpack
// configurations.
require('babel-polyfill');
module.exports = {
  mode: 'development',
  // polyfil for dynamic imports
  // https://github.com/babel/babel/issues/7824
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].[contenthash].bundle.js',
    filename: '[name].[contenthash].bundle.js',
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader'},
      { test: /.css$/, 
        use: [
          {
            // separate CSS out of JS and place in link tag
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV !== 'production'
            }
          },
          // 'style-loader', not working in development
          'css-loader'
        ]
      },
      { test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otfj)$/, use: 'file-loader' },
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      filenme: '[name].css',
      chunkFilename: '[id].css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Benjamin Y. Schachter',
      template: './src/index.html'
    }),
    // Todo -- not outputting a manifest.json
    // fix it so you can pwa.
    new ManifestPlugin({
      fileName: 'mainfest.json'
    })
  ],
  devServer: {
    contentBase: './dist'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};