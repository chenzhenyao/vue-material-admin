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
    component: require('../views/Yard'),
    children: [{
      path: 'home',
      component: lazyLoading('Home')
    }, {
      path: '*',
      component: lazyLoading('schedule/Index')
    }, {
      path: 'example1',
      component: lazyLoading('example/Example1')
    }, {
      path: 'example2',
      component: lazyLoading('example/Example2')
    }]
  }]
})
