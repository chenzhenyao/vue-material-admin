import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const lazyLoading = (name, index = false) => () => System.import(`views/${name}${index ? '/index' : ''}.vue`)

export default new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'is-active',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [{
    name: 'login',
    path: '/login',
    component: require('../views/Login')
  }, {
    path: '/',
    component: require('../views/base/Yard'),
    children: [{
      name: 'home',
      path: 'home',
      component: lazyLoading('Home')
    }]
  }]
})
