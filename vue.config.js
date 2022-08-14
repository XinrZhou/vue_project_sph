const { defineConfig } = require('@vue/cli-service')
module.exports =  defineConfig({
  //关闭eslint
  lintOnSave: false,

  //代理跨域
  devServer: {
    host:'localhost',
    port: 8080,
    proxy: {
      '/api':{
        target: 'http://gmall-h5-api.atguigu.cn',
      }
    }
  }
})
