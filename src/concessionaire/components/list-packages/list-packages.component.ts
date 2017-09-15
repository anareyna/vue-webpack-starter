import { log } from 'util';
import Layout from 'concessionaire/components/layout/layout.component.vue'
import { BASE_URL } from './../../../common/services/constants.ts'
import { mapState } from 'vuex'
import * as moment from 'moment'

export default {
  components: {
    Layout
  },
  computed: {
    ...mapState('user', ['vehicleSelected']),
    ...mapState('packages', ['packages', 'sellerPackage'])
  },
  watch: {
    vehicleSelected(vehicleSelected) {
      this.idSeller = vehicleSelected.id
      this.$store.dispatch('packages/getPackages', this.idSeller)
      this.resetCurrentPage()
      this.renderTable()
    }
  },
  data () {
    return {
      isLoading: true,
      daysLeft: null,

      pageSize: 20,
      currentPage: 1,
      currentTab: 3,
      idSeller: 1,

      breadcrumbList: [
      {
        name: 'Mis Paquetes',
        path: {
          path: '/mis-paquetes'
        }
      }
      ],
      indexCurrent: -1
    }
  },
  methods: {
    renderTable() {
      let params = {
        idSeller: this.idSeller,
        currentTab: this.currentTab,
        currentPage: this.currentPage,
        pageSize: this.pageSize
      }
      this.$store.dispatch('packages/getPackagesOnDemand', {
        params,
        cb:() => {
          this.isLoading = false
        }
      })
    },  

    onChangePage(currentPage) {
      this.currentPage = currentPage
      this.renderTable()
    },

    onChangeTab(tab) {
      this.currentTab = Number(tab.name)
      this.resetCurrentPage()
    },

    resetCurrentPage() {
      this.currentPage = 1
    },

    remainingDays(endDate) {
      let now = moment().format('MM/DD/YYYY')
      let end = moment(endDate).format('MM/DD/YYYY')
      let diffInDays = Math.floor((Date.parse(end) - Date.parse(now)) / (1000 * 3600 * 24))
      return (diffInDays > 0) ? diffInDays : 0
    },

    showTooltip (idPackageDurationPrice, idPackage, id) {
      this.valDisabled = false      
      this.$store.dispatch('packages/showDetailPackage', {
        typePackage: this.currentTab,
        idPackage: idPackage,
        idPackageDurationPrice: idPackageDurationPrice,
        id:id
      })     
    },

    payPackageLink (idPackage, durationPrice) {
      return `${BASE_URL}/publicacion/concesionario/pagar-paquete/id/${idPackage}/time/${durationPrice}`
    },

    deletePackage (idPackage, index) {
      this.indexCurrent = index
      let currentPage = ((this.amountPackagesPendingPayment % this.pageSize) == 1) ? this.currentPage -1 : this.currentPage 
      let params = {
        id: idPackage,
        idSeller: this.idSeller,
        currentTab: this.currentTab,
        currentPage: this.currentPage,
        pageSize: this.pageSize
      }

      this.$store.dispatch('packages/deletePackage', {
        params,
        cb:(position) => {
          let current = position ? position : index
          this.indexCurrent = current
        }
      })
    },
    deleteRow(row, index) {
      if(index == this.indexCurrent){
        return 'remove'
      }
    },
    onDelete (idPackage, index) {
      this.$confirm('¿Desea eliminar el paquete?', 'Eliminar', {
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
        type: 'warning'
      }).then(() => {
        this.deletePackage(idPackage, index)
      }).catch(() => {})
    }
  }
}