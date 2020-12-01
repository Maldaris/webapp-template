const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: {
    main: path.resolve(path.join('.', 'src', 'App.jsx'))
  },
  output: {
    path: path.resolve(path.join('.', 'dist')),
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss']
  },
  module: {
    rules: [{
      test: /\.(js|jsx)?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
      type: 'asset/resource'
    },
    {
      test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
      type: 'asset/inline'
    },
    {
      test: /\.s[ac]ss$/,
      use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: path.resolve(__dirname, './src/assets/favicon.ico'),
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    })
  ]
};
