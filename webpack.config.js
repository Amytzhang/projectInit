const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname,'dist')
  },
  devServer:{
    port: 8080,
    open: true,
    compress: true
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/test.html',
      hash: true,
      minify:{
        removeAttributeQuotes: true,
        collapseInlineTagWhitespace: true,
        removeComments:true
      },
      filename: 'ab.html'
    })
  ]
}