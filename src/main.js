import Vue from 'vue'
import VueRouter from 'vue-router'
//import aaa from 'element-ui'
import { Breadcrumb, BreadcrumbItem, Table, TableColumn, Icon, Popover, Tag, Button } from 'element-ui'

import routes from './routes'
import App from './App.vue'

//console.log("Breadcrumb element.io", Breadcrumb);
//Vue.component(Breadcrumb.name, Breadcrumb)
Vue.use(VueRouter)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Icon)
Vue.use(Popover)
Vue.use(Tag)
Vue.use(Button)






const router = new VueRouter(routes)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})