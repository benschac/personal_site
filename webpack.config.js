const path                     = require('path')
    , webpack                  = require('webpack')
    , HtmlWebpackPlugin        = require('html-webpack-plugin')
    , { CleanWebpackPlugin }   = require('clean-webpack-plugin')
    , ManifestPlugin           = require('webpack-manifest-plugin')
    , MiniCssExtractPlugin     = require('mini-css-extract-plugin')
    , { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
    , WorkboxPlugin            = require('workbox-webpack-plugin')
    ;
// Todo Production Checklist:
// CSS: - https://webpack.js.org/plugins/mini-css-extract-plugin

// When Analysing bundle size:
// http://webpack.github.com/analyse


// Todo: create common, development and production webpack
// configurations.

// Todo: think about CSP

// Todo: create a scaffold https://webpack.js.org/contribute/writing-a-scaffold/


// Todo: https://github.com/gaearon/react-hot-loader


// Todo: Fix Service worker & update webpack documentation
// https://developers.google.com/web/tools/workbox/guides/get-started

require('babel-polyfill');
module.exports = env => {
  return {
    mode: 'development',
    // polyfil for dynamic imports
    // https://github.com/babel/babel/issues/7824
    entry: ['babel-polyfill', './src/index.tsx'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      chunkFilename: '[name].[hash].bundle.js',
      filename: '[name].[hash].bundle.js',
    },
    optimization: {
      runtimeChunk: 'single',
      usedExports: true,
      // Todo: Use the SplitChunksPlugin in async mode in Multi-Page Applications.
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    },
    module: {
      rules: [
        { test: /\.(ts|tsx)$/, exclude: /node_modules/, use: 'ts-loader' },
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
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
      // Only break the cache when new vendor deps
      // change.
      // The vendor bundle changed because its module.id was changed.
      // recommended for production builds.
      new WorkboxPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true
      }),
      new webpack.HashedModuleIdsPlugin(),
      new BundleAnalyzerPlugin(),
      new MiniCssExtractPlugin({
        filenme: '[name].css',
        chunkFilename: '[id].css'
      }),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Benjamin Y. Schachter',
        template: './src/index.html',
        entry: './src/index.html'
      }),
      // Todo -- not outputting a manifest.json
      // fix it so you can pwa.
      new ManifestPlugin({
        fileName: 'mainfest.json'
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
      contentBase: './dist',
      hot: true,
      writeToDisk: true
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
    }
  }
};