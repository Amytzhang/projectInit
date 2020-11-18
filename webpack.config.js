const path = require('path')
const HtmlWebpackPlugin = require()
module.exports = {
  // mode: 'development',
  entry: "./src/index.js",
  publicPath: process.env.NODE_ENV === 'production'?'/app/':'/',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname,'dist')
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './index.html',
      hash: true
    })
  ]
}