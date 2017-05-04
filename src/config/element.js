import { 
    Breadcrumb, 
    BreadcrumbItem, 
    Button, 
    Checkbox, 
    CheckboxGroup, 
    Col, 
    Dialog, 
    Form, 
    FormItem, 
    Icon, 
    Input, 
    Message,
    MessageBox,
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


import lang from 'element-ui/lib/locale/lang/es'
import locale from 'element-ui/lib/locale'

export default{
    init(Vue){
        locale.use(lang)

        Vue.use(Breadcrumb)
        Vue.use(BreadcrumbItem)
        Vue.use(Button)
        Vue.use(Checkbox)
        Vue.use(CheckboxGroup)
        Vue.use(Col)
        Vue.use(Dialog)
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

        Vue.prototype.$notify = Notification
        Vue.prototype.$msgbox = MessageBox
        Vue.prototype.$message = Message
        Vue.prototype.$confirm = MessageBox.confirm
    }
}
