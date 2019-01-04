const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development', 
  entry: './src/server.ts', 
  target: 'node', 
  externals: [nodeExternals()], 
  devtool: 'eval-source-map', 
  module: {
    rules: [
      {
        enforce: 'pre', 
        loader: 'tslint-loader', 
        test: /\.ts$/, 
        exclude: [
          /node_modules/
        ], 
        options: {
          emitErrors: true
        }
      }, 
      {
        loader: 'ts-loader', 
        test: /\.ts$/, 
        exclude: [
          /node_modules/
        ], 
        options: {
          configFile: 'tsconfig.dev.json'
        }
      }
    ]
  }, 
  resolve: {
    extensions: ['.ts', '.js', '.json']
  }, 
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist')
  }, 
  devServer: {
    contentBase: "./dist"
  }
};
