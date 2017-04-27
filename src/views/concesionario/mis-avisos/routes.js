import Main from './Main.vue'

import AnadirAvisos from './AnadirAvisos.vue'
import AvisosActivos from './AvisosActivos.vue'

export default{
    path      : '/concesionario/mis-avisos', 
    component : Main,
    children  : [{
      path      : 'anadir-avisos',
      component : AnadirAvisos
    },{
      path      : 'avisos-activos',
      component : AvisosActivos
    }]
}
