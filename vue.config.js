const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: "localhost",
    port: 8080,
    open: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
  }
})
