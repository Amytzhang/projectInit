const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output:{
    filename: "build.js",
    path: path.resolve(__dirname,"dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:"./index.html",
      hash: true,
      minify:{
        removeAttributeQuotes:true,
        collapseWhitespace: true,
        removeComments: true
      },
      filename:"out.html"
    })
  ]
}