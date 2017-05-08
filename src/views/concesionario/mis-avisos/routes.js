import Main from 'views/concesionario/mis-avisos/Main.vue';

import AnadirAvisos from 'views/concesionario/mis-avisos/AnadirAvisos.vue';
import AvisosActivos from 'views/concesionario/mis-avisos/AvisosActivos.vue';

export default {
    path      : '/concesionario/mis-avisos',
    component : Main,
    children  : [{
        path      : 'anadir-avisos',
        component : AnadirAvisos,
    }, {
        path      : 'avisos-activos',
        component : AvisosActivos,
    }],
};
