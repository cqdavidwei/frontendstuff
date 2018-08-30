import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/router/views/Home'
import ZhiHu from '@/router/views/ZhiHu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/zhihu',
      name: 'ZhiHu Title',
      component: ZhiHu
    }
  ],
  mode: 'history'
})
