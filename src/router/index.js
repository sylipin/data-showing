import Vue from 'vue'
import Router from 'vue-router'
import indexTable from '../components/global/indexTable.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:indexTable,
      meta:{
        title:'首页'
      }
    }
  ]
})
