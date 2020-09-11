const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  resolve:{
    extensions:['.ts','.js']
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(js|ts)$/,
            include: path.join(__dirname, '..', './src'),
            loader: require.resolve('babel-loader'),
            options: {
              // // This is a feature of `babel-loader` for webpack (not Babel itself).
              // // It enables caching results in ./node_modules/.cache/babel-loader/
              // // directory for faster rebuilds.
              cacheDirectory: true,
              // // See #6846 for context on why cacheCompression is disabled
              cacheCompression: false,
              // compact: isEnvProduction,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, '../index.html'),
    }),
  ],
}
