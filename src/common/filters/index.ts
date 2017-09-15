import Vue from 'vue'
import * as moment from 'moment'

moment.locale('es')

moment.updateLocale('es', {
    monthsShort : [
    "Ene", "Feb", "Mzo", "Abr", "May", "Jun",
    "Jul", "Ago", "Set", "Oct", "Nov", "Dic"
    ]
})

Vue.filter('formatDate', function (value) {
    if (value) {
        return moment(value).format('DD/MM/YY')
    }
})

Vue.filter('formatDateByMonth', function (value) {
    if (value) {
        return moment(value).format('DD MMM YY')
    }
})

Vue.filter('capitalize', function (value) {
    if (!value && value !== 0) return ''
        value = value.toString().toLowerCase()
    return value.charAt(0).toUpperCase() + value.slice(1)
});
