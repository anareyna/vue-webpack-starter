import Vue from 'vue'
import VueRouter from 'vue-router'

import App from 'App.vue'

// import 'theme/index.css'
import element from 'config/element.js'
import global from 'config/global.js'
import routes from 'config/routes.js'

element.init(Vue)
global.init(Vue)

Vue.use(VueRouter)

const router = new VueRouter(routes)

new Vue({
    el    : '#app',
    router,
    render: h => h(App)
})
