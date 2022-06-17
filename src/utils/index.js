import utils from './utils.js'

//此处只是循环挂载，要使其有效使用还得在main.js中使用
//import installUtils from "./utils/index.js"
//installUtils(Vue)

export default (Vue) => {
    Vue.prototype.$utils = {}
    Object.keys(utils).forEach(item => {
        // 设置vue全局变量
        Vue.prototype.$utils[item] = utils[item]
    })
}