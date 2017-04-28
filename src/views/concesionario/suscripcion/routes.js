import Main from './Main.vue'

import Listar from './Listar.vue'

export default{
    path      : '/concesionario/suscripcion', 
    component : Main,
    children  : [{
      path      : 'listar',
      component : Listar
    }]
}
