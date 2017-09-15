import Vue from 'vue'

import functionsUtil from './../common/utils/functions.util' 
functionsUtil.log()

import App from './components/app/app.component.vue'
import bootstrap from './config/bootstrap'
import store from './store'
import router from './concessionaire.router'

bootstrap.init(store)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
