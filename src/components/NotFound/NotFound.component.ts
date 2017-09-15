import Layout from 'concessionaire/components/layout/layout.component.vue'

export default {
  components: {
    Layout
  },  
  data () {
    return {      
      breadcrumbList: [
        {
          name: 'Mi Perfil',
          path: {
            path: '/mi-perfil'
          }
        }
      ]
    }
  }
}
