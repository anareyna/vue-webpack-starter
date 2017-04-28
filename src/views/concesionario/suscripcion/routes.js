import Main from './Main.vue'

import Listar from './Listar.vue'
import Agregar from './Agregar.vue'

export default{
    path      : '/concesionario/suscripcion', 
    component : Main,
    children  : [{
      path      : 'listar',
      component : Listar
    }, {
    	path      : 'agregar',
      	component : Agregar
  }]
}

