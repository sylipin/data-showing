<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    //vue-router 初始化是需要一段时间的，在完成之前，取值只能拿到初始的默认值。
    //在 mounted 中 router 初始化可能还没有完成 => 使用this.$router.onReady解决

    this.$router.onReady(()=>{
      this.getUrlTokenAndSetCookie()
    })
  },
  methods:{
    //因本项目为嵌入小程序的，故得拿去但小程序跳转过来是传的token进行身份认证
    getUrlTokenAndSetCookie() {
      let querys = this.$route.query
      if (querys.token) {
        this.$utils.setCookie("_autocrm_token_", querys.token, 7, "", "/")
      }
    },
  }
}
</script>

<style>
</style>
