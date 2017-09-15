import * as VueGoogleMaps from 'vue2-google-maps'
import Vue from 'vue'

import Marker from 'vue2-google-maps/dist/components/marker.js'
import Map from 'vue2-google-maps/dist/components/map'

import {mapState, mapMutations} from 'vuex'
import ubigeo from 'store/ubigeo'
import seller from 'concessionaire/store/seller'

import Layout from './../layout/layout.component.vue'
import store from 'concessionaire/store'

Vue.use(<any>VueGoogleMaps, {
  load: {
    key: 'AIzaSyBzlLYISGjL_ovJwAehh6ydhB56fCCpPQw'
  }, Map, Marker
})
store.registerModule('ubigeo', ubigeo)
store.registerModule('seller', seller)

export default {
  data () {
    return {
      isChangeVehicleSelected: false,
      isLoading: true,
      photo: null,
      ShowMap: false,
      idVehicleType: null,
      loading: false,
      pressedSubmit: false,
      details: {
        img: '',
        name: '',
        companyName: '',
        ruc: ''
      },
      breadcrumbList: [
        {
          name: 'Mi Perfil',
          path: {
            path: '/mi-perfil'
          }
        }
      ],
      frm: {
        idSeller: null,
        sellerNameConcessionaire: null,
        email1: null,
        email2: null,
        phone1: null,
        annex1: null,
        phone2: null,
        annex2: null,
        description: null,
        address: null,
        department: '',
        province: '',
        district: '',
        lastDpto: null,
        lastProv: null,
        latitude: null,
        longitude: null
      },
      map: {
        lat: null,
        lng: null
      },
      rules: {
        sellerNameConcessionaire: [
          { required: true, message: 'Ingrese contacto', trigger: 'blur' }
        ],
        email1: [
          { required: true, message: 'Ingrese email', trigger: 'blur' },
          { type: 'email', message: 'Ingrese mail válido', trigger: 'blur' }
        ],
        email2: [
          { required: false, message: 'Ingrese email', trigger: 'blur' },
          { type: 'email', message: 'Ingrese mail válido', trigger: 'blur' }
        ],
        phone1: [
          { required: true, message: 'Ingrese teléfono', trigger: 'blur' },
          { validator: this.onlyDigits, trigger: 'blur' }
        ],
        annex1: [
          { required: false, message: 'Anexo inválido', trigger: 'blur' },
          { validator: this.onlyDigits, trigger: 'blur' }
        ],
        phone2: [
          { required: false, message: 'Ingrese teléfono', trigger: 'blur' },
          { validator: this.onlyDigits, trigger: 'blur' }
        ],
        annex2: [
          { required: false, message: 'Anexo inválido', trigger: 'blur' },
          { validator: this.onlyDigits, trigger: 'blur' }
        ],
        description: [
          { required: false, message: 'Ingrese descripción', trigger: 'blur' }
        ],
        address: [
          { required: true, message: 'Ingrese dirección', trigger: 'blur' }
        ],
        department: [
          { type: 'number', required: true, message: 'Seleccione departamento', trigger: 'change' }
        ],
        province: [
          { type: 'number', required: true, message: 'Seleccione provincia', trigger: 'change' }
        ],
        district: [
          { type: 'number', required: true, message: 'Seleccione districto', trigger: 'change' }
        ]
      }
    }
  },
  components: {
    gmapMap: Map,
    gmapMarker: Marker,
    Layout
  },
  watch: {
    methodsUpdate ({response}) {
      this.loading = false
      if (response.status === 200) {
        this.$message({
          type: 'success',
          message: response.data.data.message
        })
      }
      if (response.status === 400) {
        this.$message.error({
          message: response.data.data.message
        })
      }
    },
    vehicleSelected (vehicleSelected, old) {
      if(this.isChangeVehicleSelected) this.$refs['frm'].resetFields()
      this.isChangeVehicleSelected = true
      
      this.pressedSubmit = false
      this.frm.latitude = Number(vehicleSelected.latitude)
      this.frm.longitude = Number(vehicleSelected.longitude)

      this.frm.idSeller = vehicleSelected.id
      this.idVehicleType = vehicleSelected.idVehicleType

      this.frm.sellerNameConcessionaire = vehicleSelected.sellerNameConcessionaire
      this.frm.email1 = vehicleSelected.email1
      this.frm.email2 = vehicleSelected.email2
      this.frm.description = vehicleSelected.description
      this.frm.address = vehicleSelected.address

      this.frm.phone1 = this.getPhone(vehicleSelected.phone1)
      this.frm.annex1 = this.getAnnex(vehicleSelected.phone1)

      this.frm.phone2 = this.getPhone(vehicleSelected.phone2)
      this.frm.annex2 = this.getAnnex(vehicleSelected.phone2)

      this.frm.department = vehicleSelected.idDepartment

      if (vehicleSelected.idDepartment !== null) {
        this.frm.province = vehicleSelected.idProvince
        store.dispatch('ubigeo/getProvincesByDepartment', vehicleSelected.idDepartment)

        if (vehicleSelected.idProvince !== null) {
          this.frm.district = vehicleSelected.idDistrict
          store.dispatch('ubigeo/getDistrictsByProvince', {
            idDepartment: vehicleSelected.idDepartment,
            idProvince: vehicleSelected.idProvince
          })
        }
      }

      this.map.lat = this.frm.latitude || -12.08091
      this.map.lng = this.frm.longitude || -77.01255
      this.ShowMap = true
      this.photo = vehicleSelected.mainPhoto
      this.isLoading = false
    }
  },
  computed: {
    ...mapState('user', ['user', 'entity', 'concessionaire', 'vehicleSelected']),
    ...mapState('ubigeo', ['departments', 'provinces', 'districts']),
    ...mapState('seller', ['methodsUpdate'])
  },
  methods: {
    ...mapMutations('ubigeo', ['CLEAN_DISTRICTS']),
    onlyDigits (rule, value, callback) {
      if (value && !/^\d*$/.test(value)) {
        callback(new Error('Ingrese digitos'))
      } else {
        callback()
      }
    },
    getPhone (value) {
      if (value) {
        return value.split('-')[0].trim()
      }
    },
    getAnnex (value) {
      if (value && value.indexOf('-') > -1) {
        return value.split('-')[1].trim()
      }
    },
    getMarkerPosition (position) {
      this.frm.latitude = position.lat().toFixed(5)
      this.frm.longitude = position.lng().toFixed(5)
    },
    onSubmit (frmProfile) {
      this.pressedSubmit = true
      this.$refs[frmProfile].validate((valid) => {
        if (valid) {
          this.loading = true
          store.dispatch('seller/updateSeller', {
            fields: this.$refs[frmProfile].model,
            id: this.frm.idSeller
          })
          store.dispatch('user/getUser', {idVehicleType: this.idVehicleType})
        } else {
          this.$message.error({
            message: 'Error al enviar formulario'
          })
          return false
        }
      })
    },
    onResetForm (frmProfile) {
      this.$refs[frmProfile].resetFields()
    },
    onChangeDepartment (e) {
      if (!e.cancelable) {
        this.frm.province = ''
        this.frm.district = ''
        this.revalidate()
        this.CLEAN_DISTRICTS()
        store.dispatch('ubigeo/getProvincesByDepartment', this.frm.department)
      }
    },
    onChangeProvince (e) {
      if (!e.cancelable) {
        this.frm.district = ''
        this.revalidate()
        store.dispatch('ubigeo/getDistrictsByProvince', {
          idDepartment: this.frm.department,
          idProvince: this.frm.province
        })
      }
    },
    onChangeDistrict (e) {
      if (!e.cancelable) this.revalidate()
    },
    revalidate () {
      if (this.pressedSubmit) {
        this.$refs['frm'].validate()
      }
    }
  },
  created () {
    store.dispatch('ubigeo/getDepartments')
  }
}
