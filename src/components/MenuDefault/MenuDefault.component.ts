import auth from './../../common/oauth/site.guard'
import * as EventBus from './../../common/libs/event-bus.lib'

export default {
  data () {
    return {
      urlActive: this.$route.path
    }
  },
  methods: {
    logout () {
      auth.logout()
    },
    selectedMenu (menu) {
      let url = ''
      switch (menu) {
        case 'mi-perfil':
          url = '/mi-perfil'
          break
        case 'gestion-0km':
          url = '/gestion-0km'
          break
        case 'versiones':
          url = '/gestion-0km'
          break
      }
      this.urlActive = url
    }
  },
  mounted () {    
    EventBus.default.$on('MenuDefault:selectedMenu', this.selectedMenu)
  }  
}
