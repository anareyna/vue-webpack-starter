import Layout from 'concessionaire/components/layout/layout.component.vue'
import * as EventBus from './../../../common/libs/event-bus.lib'

export default {
  data () {
    return {
      loading: true,
      description: [],
      id: this.$route.params.id,
      breadcrumbList: [
        {
          name: 'Gestión 0km',
          path: {
            path: '/gestion-0km'
          }
        },
        {
          name: 'Versiones'
        }
      ],
      versionsData : [{
        version: 'CE',
        status: true,
        interestedCount: 5,
        showPrice: [{
          id:1,
          text: 'de lista'
        }, {
          id:1,
          text: 'de venta'
        }],
        priceList: '20,000',
        priceSale: '20,900',
        descriptionPromotion: 'Incluye 1er mantenimiento, ademas incluye SOAT por 1 año y cupones de descuento en accesorios por S/ 2,000 adicionales.'
      },{
        version: 'CE',
        status: true,
        interestedCount: 5,
        showPrice: [{
          id:1,
          text: 'de lista'
        }, {
          id:1,
          text: 'de venta'
        }],
        priceList: '20,000',
        priceSale: '20,900',
        descriptionPromotion: 'Incluye 1er mantenimiento, ademas incluye SOAT por 1 año y cupones de descuento en accesorios por S/ 2,000 adicionales.'
      }],      
    }
  },
  components: {
    Layout
  },
  methods: {
    limitToDescription (description) {
      return description.substring(0, 25) + '...'
    },

    toggleDescription (id) {
      let position = this.description.indexOf(id)
      if(position == -1){
        this.description.push(id)
      } else {
        this.description.splice(position, 1)
      }
    },

    showTotalDescription (id) {
      return this.description.includes(id)
    }
  },
  mounted () {
    EventBus.default.$emit('MenuDefault:selectedMenu', 'versiones')    
  }
}
