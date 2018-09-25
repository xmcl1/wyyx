import Vue from 'vue'
import Router from 'vue-router'

import index from '@/pages/index'
import IntegralCenter from '@/pages/IntegralCenter'
import indexRecommend from "@/components/index/indexRecommend"
// import newPro from "@/pages/newPro"

// import HelloWorld from '@/components/HelloWorld'

// 以下是冯炳权的页面路由引入文件
import shiwu from '@/pages/shiwu'
import jujia from '@/pages/juJia'

// 以下是张廷杰的页面路由引入文件
// import shiwu from '@/pages/shiwu'

// 以下是李欣媛的页面路由引入文件
import newPro from '@/pages/newPro'

// 以下是张鹏斌的页面路由引入文件
import fenlei from '@/pages/fenlei'
import shoppingcart from '@/pages/shoppingCart'
import product from '@/pages/productGoods'

 // 以下是贺康的页面路由引入文件
 import geren from '@/pages/geren'
import shezhi from '@/pages/shezhi'
import loginChoose from '@/pages/loginChoose'
import phonelogin from '@/pages/phonelogin'
import phoneregister from '@/pages/phoneregister'

Vue.use(Router)

export default new Router({
  routes: [
//首页
    {
      path: '/',
      name: 'index', 
      component: index
    }, 
    // 以下是冯炳权的页面路由
    {
      path: '/shiwu',
      name: 'shiwu',
      component: shiwu
    }, 
     {
      path: '/jujia',
      name: 'jujia',
      component: jujia
    },

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
    {
      path: '/geren',
      name: 'geren',
      component: geren
    },
    {
      path: '/shezhi',
      name: 'shezhi',
      component: shezhi
    },
    {
      path: '/loginChoose',
      name: 'loginChoose',
      component: loginChoose
    },
    {
      path: '/phonelogin',
      name: 'phonelogin',
      component: phonelogin
    },
    {
      path: '/phoneregister',
      name: 'phoneregister',
      component: phoneregister
    }
  ]
})
