# data_show

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 全局挂载的使用查看utils文件夹

## 使用scss
npm install sass-loader@7.3.1 --save-dev
npm install node-sass --save
npm install style-loader --save
在webpackc.base.config.js中加入：
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
在vue.config.js中加入
  css: {
    loaderOptions: {
      // 配置全局scss和mixin
      sass: {
        prependData: `
          @import "@/style/mixin.scss";
          @import "@/style/common.scss";
        `,
      },
    },
  },


  ## 路径定位优化
  未配置请款下使用路径需要层层定位，配置后可直接用如@utils/index.js访问
  配置在vue.config.js
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