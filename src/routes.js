import ConcesionarioMisAvisos from './views/concesionario/mis-avisos/routes.js'
import ConcesionarioSuscripcion from './views/concesionario/suscripcion/routes.js'

import notFound from './components/notFound.vue'

export default{
    mode  : 'history',
    routes: [
        ConcesionarioMisAvisos,
        ConcesionarioSuscripcion,
        {
            path: "*",
            component: notFound
        }
    ]
}
