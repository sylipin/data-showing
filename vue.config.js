// const CompressionWebpackPlugin = require('compression-webpack-plugin')
// const productionGzipExtensions = ['js', 'css']

const path = require("path")
const resolve = (dir) => path.join(__dirname, dir)
module.exports = {
  outputDir: process.env.OUTPUT_DIR,
  publicPath: "./",
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.entry("index").add("babel-polyfill").end()
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@views", resolve("src/views"))
      .set("@config", resolve("src/config"))
      .set("@utils", resolve("src/utils/"))
      .set("@http", resolve("src/http"))
      .set("@api", resolve("src/http/api"))
      .set("@mixin", resolve("src/mixin"))
      .set("@components", resolve("src/components"))
      .set("@images", resolve("src/assets/images"))
      .set("@svg", resolve("src/assets/svg"))
      .set("@layout", resolve("src/layout"))
    // 移除 prefetch 插件
    config.plugins.delete("prefetch-index")
    // 移除 preload 插件
    config.plugins.delete("preload-index")
  },
  css: {
    loaderOptions: {
      // 配置全局scss和mixin
      sass: {
        prependData: `
          @import "@/style/scss";
          @import "@/style/common.scss";
        `,
      },
    },
  },
  lintOnSave: false,
  // devServer: {
  //   host: "dev.pcauto.com.cn",
  //   port: 8080,
  //   disableHostCheck: true,
  //   proxy:{
  //     '/mockApi':{
  //       target:"http://10f33de5-f1de-421e-96d3-72c70112c139.mock.pstmn.io",
  //       ws:true,
  //       changeOrigin:true,
  //       pathRewrite:{
  //         '^/mockApi':"/"
  //       }
  //     },
  //     '/mall':{
  //       target:"https://qa-qdcore.pcauto.com.cn",
  //       ws:true,
  //       changeOrigin:true,
  //       pathRewrite:{
  //         '^/mall':"/"
  //       }
  //     }
  //   }

  // },
  // plugins: [
  //   // 配置compression-webpack-plugin压缩
  //   new CompressionWebpackPlugin({
  //     algorithm: 'gzip',
  //     test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
  //     threshold: 10240,
  //     minRatio: 0.8
  //   })
  // ]
}
