import axios from 'axios';

export default {
    init(Vue) {
        Vue.component('IconSvg', require('components/global/IconSvg.vue'))
        Vue.prototype.$axios = axios
    }
};
