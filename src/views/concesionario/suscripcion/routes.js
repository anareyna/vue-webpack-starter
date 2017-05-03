import Main from 'views/concesionario/suscripcion/Main.vue'

import Listar from 'views/concesionario/suscripcion/Listar.vue'
import Agregar from 'views/concesionario/suscripcion/Agregar.vue'
import Editar from 'views/concesionario/suscripcion/Editar.vue'

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
