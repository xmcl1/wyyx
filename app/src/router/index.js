import Vue from 'vue'
import Router from 'vue-router'

import index from '@/pages/index'

// import HelloWorld from '@/components/HelloWorld'

// 以下是冯炳权的页面路由引入文件
import shiwu from '@/pages/shiwu'

// 以下是张廷杰的页面路由引入文件
// import shiwu from '@/pages/shiwu'

// 以下是李欣媛的页面路由引入文件
import newPro from '@/pages/newPro'

// 以下是张鹏斌的页面路由引入文件
import fenlei from '@/pages/fenlei'
import shoppingcart from '@/pages/shoppingCart'
import product from '@/pages/productGoods'

 // 以下是贺康的页面路由引入文件
//  import shiwu from '@/pages/shiwu'

Vue.use(Router)

export default new Router({
  routes: [
    // 首页-张廷杰
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    // 以下是冯炳权的页面路由
    {
      path: '/shiwu',
      name: 'shiwu',
      component: shiwu
    },
    // 以下是张廷杰的页面路由
    // {
    //   path: '/shiwu',
    //   name: 'shiwu',
    //   component: shiwu
    // },
    // 以下是张廷杰的页面路由
    // {
    //   path: '/shiwu',
    //   name: 'shiwu',
    //   component: shiwu
    // },

    // 以下是李欣媛的页面路由
    {
      path: '/newPro',
      name: 'newPro',
      component: newPro
    },

    // 以下是张鹏斌的页面路由
    {
      path: '/fenlei',
      name: 'fenlei',
      component: fenlei
    },
    {
      path: '/shoppingcart',
      name: 'shoppingcart',
      component: shoppingcart
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    // 以下是贺康的页面路由
    // {
    //   path: '/shiwu',
    //   name: 'shiwu',
    //   component: shiwu
    // }
  ]
})
