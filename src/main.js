import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { routes } from './routes'
import VueRouter from 'vue-router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { BAlert } from 'bootstrap-vue'
Vue.component('b-alert', BAlert)
Vue.use(VueRouter)

const router = new VueRouter({ 
  routes,
  mode: 'history'
});


new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
