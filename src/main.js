import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

import element from './element'
import global from './global'
import routes from './routes'

element.init(Vue)
global.init(Vue)

Vue.use(VueRouter)

const router = new VueRouter(routes)

new Vue({
    el    : '#app',
    router,
    render: h => h(App)
})
