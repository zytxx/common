import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      redirect: '/login'
    },
    {
      path: '/index',
      component: resolve => require(['../components/common/Frame.vue'], resolve),
      children: [
        {
          path: '/',
          component: resolve => require(['../components/page/Index.vue'], resolve)
        },
        {
          path: '/write',
          component: resolve => require(['../components/page/Write.vue'], resolve)
        }
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../components/page/Login.vue'], resolve)
    }
  ]
})
