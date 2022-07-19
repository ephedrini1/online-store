const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
         test:  /\.css$/i,
      use: ['style-loader', 'css-loader' ]
     },
      {
         test: /\.(png|jpe?g|svg)$/i,
         type: 'asset/resource',
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/img/[name][ext]',
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/index.html'),
        filename: 'index.html',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/assets/img',
          to: path.resolve(__dirname, './dist/assets/img'),
        },
      ],
    }),
],
}

