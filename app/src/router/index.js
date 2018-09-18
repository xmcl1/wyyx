import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    // 首页-张廷杰
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
