import Vue from 'vue'
import VueRouter from 'vue-router'

import controller from './concessionaire.controller'

Vue.use(VueRouter)

const routers = [
  controller.index,
  controller.miperfil,
  controller.gestion0km.index,
  controller.gestion0km.versiones,
  controller.paquetes,
  controller.impresos,
  controller.default
]

export default new VueRouter({
  mode: 'history',
  base: 'mi-cuenta/',
  routes: routers
})
