const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        //use: 'ts-loader',
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
      	test: /\.css$/,
  		loader: 'style-loader'
      },
      {
      	test: /\.css$/,
 		loader: 'css-loader',
  		query: {
   			modules: true,
   			localIdentName: '[name]__[local]___[hash:base64:5]'
  		}
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', ".jsx" ]
  },
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};