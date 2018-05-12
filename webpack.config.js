const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./client/index.js', './client/style.scss'],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015']
        }
      },
      // use the style-loader/sass-loader combos for anything matching the .scss extension
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['style-loader', 'sass-loader'])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'public/bundle.css',
      allChunks: true
    })
  ]
};
