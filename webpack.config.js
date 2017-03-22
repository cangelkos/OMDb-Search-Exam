var path = require('path');

console.log('NODE_ENV: ', process.env.NODE_ENV)

module.exports = {
  entry: './client/src/index.js',
  output: {
    path: path.join(__dirname, 'client/dist'),
    publicPath: '/dist/', //Adds to img and src tags when bundling
    filename: 'bundle.js'
  }
  
}