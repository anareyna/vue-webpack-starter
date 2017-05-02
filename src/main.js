import Vue from 'vue'
import VueRouter from 'vue-router'

import { 
    Breadcrumb, 
    BreadcrumbItem, 
    Button, 
    Checkbox, 
    CheckboxGroup, 
    Col, 
    Form, 
    FormItem, 
    Icon, 
    Input, 
    Notification,
    Option, 
    Popover, 
    Radio, 
    RadioGroup, 
    Row, 
    Table, 
    TableColumn, 
    Tag, 
} from 'element-ui'

import routes from './routes'
import App from './App.vue'

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

Vue.prototype.$notify = Notification

const router = new VueRouter(routes)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
