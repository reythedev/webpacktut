const path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  entry: './src/index.js',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist',
  },

  // what extensions webpack will resolve
  // resolve: {
  //   extensions: ['.ts', '.js']
  // },
}
