import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import packages from './packages'
import message from 'store/message'
import entity from './entity'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    packages,
    message,
    entity
  }
})
