//此文件放置全局挂载方法，挂载过程见./index.js

/**
* 存储cookie
* @param {键名} name
* @param {键值} value
* @param {过期时间（天）} days
* @param {域名} domain
* @param {cookie存储路径} path
*/
function setCookie(name, value, days, domain, path) {
    let nTime = new Date()
    nTime.setTime(nTime.getTime() + days * 24 * 60 * 60 * 1000)
    let expires = "expires=" + nTime.toUTCString()
    document.cookie = name + "=" + value + ";" + expires + ";" + "domain=" + domain + ";" + "path=" + path
}
export const vw = (px) => {
    let mobileDesign = 750
    return (px / mobileDesign) * 100 + "vw"
  }
export default {
    setCookie,
    vw
}
