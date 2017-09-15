import {mapState} from 'vuex'

import HeaderDefault from 'components/HeaderDefault/HeaderDefault.component.vue'
import MenuDefault from 'components/MenuDefault/MenuDefault.component.vue'

export default {
  props: ['title', 'slcTypeVehicle', 'breadcrumb'],
  name: 'app',
  components: {
    HeaderDefault,
    MenuDefault
  },
  watch: {
    dataMessage () {
      this.$message({
        message: this.dataMessage.message,
        type: this.dataMessage.type
      })
    }
  },
  computed: {
    ...mapState('message', ['dataMessage'])
  }
}
