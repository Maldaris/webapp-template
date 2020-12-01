const path = require('path');

const { merge } = require('webpack-merge');
const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');

const common = require('./webpack.common');

const options = {
  hmr: true,
  host: 'localhost',
  port: 8080,
  static: path.join(__dirname, 'dist')
};

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new Serve(options)
  ],
  watch: true
});
