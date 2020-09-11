const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('../config/webpack.config')
const path = require('path')
const Webpack = require('webpack');

const compiler = Webpack(webpackConfig);
const devServer = new WebpackDevServer(compiler, {
  hot: true,
  contentBase: path.join(__dirname, '../', 'dist'), //对外提供的访问内容的路径
  compress: true, //是否启用gzip压缩
  open: true,
})

devServer.listen(9000, '127.0.0.1', () => {
  console.log('Starting server on http://localhost:8080')
})
