import Vue from 'vue'
import VueRouter from 'vue-router'

import { 
	Breadcrumb, BreadcrumbItem, Table, TableColumn, Form, FormItem, 
	Option, Col, CheckboxGroup, Checkbox, RadioGroup, Radio, Input, Button, Row, Icon, 
    Popover, Tag, Notification} 
	from 'element-ui'

import routes from './routes'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Option)
Vue.use(Col)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Input)
Vue.use(Button)
Vue.use(Row)
Vue.use(Icon)
Vue.use(Popover)
Vue.use(Tag)

Vue.prototype.$notify = Notification

const router = new VueRouter(routes)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
