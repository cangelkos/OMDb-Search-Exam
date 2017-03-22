var path = require('path');

console.log('NODE_ENV: ', process.env.NODE_ENV)

module.exports = {
  entry: {
    bundle: './client/src/index.js',
    /*vendor: ['react', 'react-dom', 'react-router']*/
  },
  output: {
    path: path.join(__dirname, 'client/dist'),
    publicPath: '/dist/', 
    filename: '[name].js'
  },
  module: {
    loaders: [ // Loaders allow you to preprocess files!
      {
        test: /\.(js)$/, // look for .js files
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
        },
      },
    ],
  },
  
}