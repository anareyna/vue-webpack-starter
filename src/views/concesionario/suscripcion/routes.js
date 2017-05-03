import Main from './Main.vue'

import Listar from './Listar.vue'
import Agregar from './Agregar.vue'
import Editar from './Editar.vue'

export default{
    path      : '/concesionario/suscripcion',
    component : Main,
    redirect  : {name: 'listarSuscripcion'},
    
    children  : [{
        path      : 'listar',
        component : Listar,
        name      : 'listarSuscripcion'
    }, {
        path      : 'agregar',
        component : Agregar,
        name      : 'agregarSuscripcion'
    }, {
        path      : 'editar/:id',
        component : Editar,
        name      : 'editarSuscripcion'
    }]
}
