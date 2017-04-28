import Vue from 'vue'
import VueRouter from 'vue-router'

import { 
	Breadcrumb, BreadcrumbItem, Table, TableColumn, Form, FormItem, 
	Option, Col, CheckboxGroup, Checkbox, RadioGroup, Radio, Input, Button, Row} 
	from 'element-ui'

import routes from './routes'
import App from './App.vue'

//console.log("Breadcrumb element.io", Breadcrumb);
//Vue.component(Breadcrumb.name, Breadcrumb)
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



const router = new VueRouter(routes)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
