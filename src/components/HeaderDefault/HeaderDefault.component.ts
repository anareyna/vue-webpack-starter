import {mapActions, mapState} from 'vuex'
import {BASE_URL} from './../../common/services/constants.ts'

export default {
  computed: {
    ...mapState('user', ['user', 'concessionaire', 'vehicleSelected', 'oUser']),
    ...mapState('packages', ['packages']),
    buyPackageLink () {
      return BASE_URL + '/publicacion/concesionario/paquetes/' + this.linkTypeVehicle[this.vehicleSelected.idVehicleType]
    }
  },
  watch: {
    packages (data) {
      let packageActive = data[3].items[0]
      this.startDateEntityPackage = packageActive ? packageActive.startDateEntityPackage : ''
      this.endDateEntityPackage = packageActive ? packageActive.endDateEntityPackage : ''
      this.announcementPaperPhotoAvailable = packageActive ? packageActive.announcementPaperPhotoAvailable : ''
      if (data[3].total > 0) {  
        this.remainingDays()
      }
      this.validPhotoAvailable()
    },
    vehicleSelected (vehicleSelected) {      
      let idSeller = vehicleSelected.id
      this.isLoading = false
      this.sltPackage = vehicleSelected.idVehicleType
      this.$store.dispatch('packages/getHeaderPackage', idSeller)
    }
  },
  props: ['title', 'breadcrumbArray', 'isSlcTypeVehicleShown'],
  data () {
    return {
      sltPackage: null,
      daysLeft: null,
      startDateEntityPackage: null,
      endDateEntityPackage: null,
      announcementPaperPhotoAvailable: null,
      isLoading: true,
      linkTypeVehicle: {
        1: 'autos',
        2: 'motos'
      }
    }
  },

  filters: {
    filterName (value) {
      if (value) {
        return value.toUpperCase()
      }
    }
  },

  methods: {
    validPhotoAvailable () {
      if (this.announcementPaperPhotoAvailable === null) {
        this.announcementPaperPhotoAvailable = 0
      }
    },
    remainingDays () {
      this.daysLeft = null
      let dateStart = new Date(this.startDateEntityPackage)
      let dateEnd = new Date(this.endDateEntityPackage)
      let timeDiff = Math.abs(dateEnd.getTime() - dateStart.getTime())
      if (timeDiff) {
        this.daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24))
      }
    },
    ...mapActions('user', ['setVehicleSelected'])
  },
  created () {
    this.$store.dispatch('user/getUser', window.localStorage.getItem('idUser'))
    this.$store.dispatch('entity/getUser', window.localStorage.getItem('idUser'))
  }
}