import Vue from 'vue'
import VueRouter from 'vue-router'

import { 
	Breadcrumb, BreadcrumbItem, Table, TableColumn, Form, FormItem, 
	Option, Col, CheckboxGroup, Checkbox, RadioGroup, Radio, Input, Button, Row, Icon, Notification, Popover, Tag} 
	from 'element-ui'

import routes from './routes'
import App from './App.vue'

//console.log("Breadcrumb element.io", Breadcrumb);
//Vue.component(Breadcrumb.name, Breadcrumb)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Button)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Col)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Icon)
Vue.use(Input)
Vue.use(Option)
Vue.use(Popover)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Row)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tag)
Vue.use(VueRouter)

const router = new VueRouter(routes)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
