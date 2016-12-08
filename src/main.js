// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import router from './router'
import store from './store'
import App from './App'
import DemoPage from './views/components/DemoPage'

Vue.component('demo-page', DemoPage)

Vue.use(VueMaterial)

Vue.material.theme.register('default', {})

const app = new Vue({
  router,
  store,
  ...App
})

app.$mount('#app')
