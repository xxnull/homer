const path = require ('path');
const nodeExternals = require ('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin'); 

module.exports = {
  target: 'node',
  mode: 'development',
  
  entry: {
    app: ['./start.js'],
  },
  output: {
    path: path.resolve (__dirname, './build'),
    filename: 'server.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new NodemonPlugin(), 
],
  externals: [nodeExternals ()],
};
