import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/view/LoginPage'
import RegistePage from '@/view/RegistePage'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  }, {
    path: '/registe',
    name: 'RegistePage',
    component: RegistePage
  }]
})
