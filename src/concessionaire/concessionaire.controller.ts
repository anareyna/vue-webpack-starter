import Info from './components/info/info.component.vue'
import ListsModels from './components/list-models/list-models.component.vue'
import ListVersions from './components/list-versions/list-versions.component.vue'
import ListPackages from './components/list-packages/list-packages.component.vue'
import NotFound from './../components/NotFound/NotFound.component.vue'
import ListPrinted from './components/list-printed/list-printed.component.vue'

export default {
  index: {
    path: '/',
    redirect: '/mi-perfil'
  },
  miperfil: {
    path: '/mi-perfil',
    component: Info
  },
  gestion0km: {
    'index': {
      path: '/gestion-0km',
      component: ListsModels
    },
    'versiones': {
      path: '/gestion-0km/versiones/:id',
      component: ListVersions,
      name: 'gestion0kmVersiones'
    }
  },
  paquetes: {
    path: '/mis-paquetes',
    component: ListPackages
  },
  impresos : {
    path: '/impresos',
    component: ListPrinted,
    name: 'ListPrinted'
  },
  default: {
    path: '*',
    component: NotFound
  }
}
