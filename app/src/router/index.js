import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import newPro from '@/pages/newPro'
// 以下是冯炳权的页面路由引入文件
import shiwu from '@/pages/shiwu'

// 以下是张廷杰的页面路由引入文件
// import shiwu from '@/pages/shiwu'

// 以下是李欣媛的页面路由引入文件
// import shiwu from '@/pages/shiwu'

// 以下是张鹏斌的页面路由引入文件
// import shiwu from '@/pages/shiwu'

 // 以下是贺康的页面路由引入文件
//  import shiwu from '@/pages/shiwu'

Vue.use(Router)

export default new Router({
  routes: [
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
    }

    // 以下是张鹏斌的页面路由
    // {
    //   path: '/shiwu',
    //   name: 'shiwu',
    //   component: shiwu
    // },
    
    // 以下是贺康的页面路由
    // {
    //   path: '/shiwu',
    //   name: 'shiwu',
    //   component: shiwu
    // }
  ]
})
