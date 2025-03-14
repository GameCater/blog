const { defineConfig } = require('@vue/cli-service')
const CompressionPlugin = require("compression-webpack-plugin")

module.exports = defineConfig({
  transpileDependencies: true,

  productionSourceMap: false,

  publicPath: './',
  outputDir: 'blog',
  assetsDir: 'static',

  devServer: {
    host: "localhost",
    port: 8080,
    https: false,
    open: true,
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [

          new CompressionPlugin({
            test: /\.js$|\.html$|.\css/, //匹配文件名
            threshold: 10240, //对超过10k的数据压缩
            deleteOriginalAssets: false //不删除源文件
          })
        ]
      }
    }
  },
})