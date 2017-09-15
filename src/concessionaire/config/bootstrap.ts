import Vue from 'vue'
import axios from 'axios'
import Element from './element.conf.js'
import Filters from 'common/filters'
import IconSvg from './../../components/global/IconSvg.vue'
import guardConcessionaire  from './../concessionaire.guard'
import guardSite  from './../../common/oauth/site.guard'
import { ServiceToken } from './../../common/services/token.service'

export default {
  loadIcons () {
    Vue.component('IconSvg', IconSvg)
  },
  loadFilters () {
    Filters
  },
  loadElement () {
    Element
  },
  validLogin () {
    if (guardSite.user.authenticated) {
      guardConcessionaire.isLogged()
      this.loadElement()
      this.loadIcons()
    }
  },
  init (store) {
    guardSite.autoLogin(() => {
      this.validLogin()
    })
    this.validLogin()
    this.configInterceptors(store)    
  },
  configInterceptors (store) {
    axios.interceptors.response.use(undefined, function (error) {
      const originalRequest = error.config

      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true
        let oServiceToken = new ServiceToken()

        return oServiceToken.getToken().then(({data})=>{
          window.localStorage.setItem('token', data.token)
          originalRequest.headers['Authorization'] = 'Bearer ' + window.localStorage.getItem('token')
          return axios(originalRequest);
        })
      }
      else{
        store.commit('message/UPDATE_DATA_MESSAGE', {
          type: 'warning',
          message: error.response.data.message
        });
        return Promise.reject(error);
      }
  });
  }
}
