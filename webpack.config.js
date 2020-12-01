const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
module.exports = {
  mode: "development",
  entry: "./index.js",
  output:{
    filename: "build.js",
    path: path.resolve(__dirname,"dist")
  },
  
  devServer:{
    port: 7777,
    open:true,
    compress: true,//开启gzip压缩
    contentBase:path.resolve(__dirname,'dist')//静态资源目录 以dist目录为基准启动配置一个访问的静态资源
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use: ['style-loader',{
          loader:'css-loader',
          options:{
            esModule:true,
            modules:true
          }
        }]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:"./index.html",
      hash: true,
      minify:{
        collapseWhitespace: true,
        removeComments: true
      },
      filename:"out.html"
    }),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    })
  ]
}