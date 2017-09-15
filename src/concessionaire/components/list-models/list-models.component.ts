import Layout from 'concessionaire/components/layout/layout.component.vue'

import brand from 'concessionaire/store/brand'
import model from 'concessionaire/store/model'
import concessionaire from 'concessionaire/store/concessionaire'
import paginator from 'common/utils/paginator.util'

import listar from 'concessionaire/store/listar'
// import entity from 'concessionaire/store/entity'

import { mapState, mapMutations } from 'vuex'

import store from 'concessionaire/store'
// import store from 'concessionaire/store'

// store.registerModule('entity', entity)
store.registerModule('brand', brand)
store.registerModule('model', model)
store.registerModule('concessionaire', concessionaire)
store.registerModule('listar', listar)

export default {
  data () {
    return {
      checkboxSelected: {
        idsModels : [],
        idsModelsActives : [],
        idsModelsDesactives : [],
      },

      vehicleCurrent: null,
      sltStatus: '',
      sltBrand: '',
      sltModel: '',
      tempSltStatus: '',
      tempSltBrand: '',
      tempSltModel: '',
      
      pageSize: 20,
      currentPage: 1,
      
      idVisibleModel: 0,

      isActivateEnabled: true,
      isInactiveEnabled: true,
      breadcrumbList: [
        {
          name: 'Gestión 0Km',
          path: {
            path: '/gestion-0km'
          }
        }
      ],

      dialogEditContactVisible: false,
      dialogEditPromoVisible: false,
      
      loading: true,
      frmEditContact: {
        name: 'John Doe',
        phone: '3454545',
        email: 'doe@gmail.com'
      }
    }
  },
  components: {Layout},
  watch: {
    vehicleSelected (vehicleSelected) {      
      store.dispatch('entity/getBrands', vehicleSelected.idVehicleType)
      this.vehicleCurrent = vehicleSelected.nameVehicleType
      this.cleanFilters()
      this.renderTable()      
    },
    modelsUser () {
      this.loading = false
      this.keepCheckedRows()
    }
  },
  computed: {
    ...mapState('entity', ['brands', 'models']),
    // ...mapState('brand', ['brands']),
    // ...mapState('model', ['models']),
    ...mapState('user', ['vehicleSelected', 'oUser']),
    ...mapState('concessionaire', ['modelsUser']),
  },
  methods: {
    ...mapMutations('model', ['CLEAN_MODELS']),
    
    // Filters
    onChangeBrand (e) {
      if(!e.cancelable){
        this.sltModel = ''
        if(this.sltBrand != ''){
          store.dispatch('entity/getModels', {idVehicleType:this.vehicleSelected.idVehicleType, idBrand:this.sltBrand})
        }
        else{
          this.CLEAN_MODELS()
        }
      }
    },
    onFilter () {
      this.tempSltStatus = this.sltStatus
      this.tempSltBrand = this.sltBrand
      this.tempSltModel = this.sltModel

      this.currentPage = 1
      this.clearModelsSelected()

      this.renderTable()
    },
    brandsByVehicle(){
      if(this.vehicleCurrent){
        return this.oUser.concessionarie[this.vehicleCurrent].brands
      }
    },
    modelByBrand(){
      if(this.vehicleCurrent){
        let model = this.oUser.concessionarie[this.vehicleCurrent].brands.filter(brand => brand.id === this.sltBrand)
        if(model.length > 0){
          return model[0].models 
        }
      }
    },
    cleanFilters() {
      this.tempSltStatus = ''
      this.tempSltBrand = ''
      this.tempSltModel = ''

      this.sltStatus = ''
      this.sltBrand = ''
      this.sltModel = ''
    },

    // Options Masive
    onOptionsMasive (option){
      switch (option) {
        case 'activate':
          store.dispatch('concessionaire/activateModels', this.checkboxSelected.idsModelsDesactives)
            .then(() => {
              this.clearModelsSelected()
              this.renderTable()
          })
          break
        case 'deactivate':
          store.dispatch('concessionaire/deactivateModels', this.checkboxSelected.idsModelsActives)
            .then(() => {
              this.clearModelsSelected()
              this.renderTable()
          })
          break
      }
    },

    // Table
    modelsByModel () {
      if(this.vehicleCurrent){
        return this.oUser.concessionarie.models
      }
    },
    getNameBrand(idBrand){
      let nameBrand = ''
      for(let brand of this.brands){
        nameBrand = brand.id == idBrand ? brand.name : nameBrand;
      }
      return nameBrand
    },    
    onHoverOptionsIndividual(idModel){
      this.idVisibleModel = idModel
    },
    onOptionsIndividual (option) {
      switch (option) {
        case 'editContact':
          this.dialogEditContactVisible = true
          break
        case 'editPromo':
          this.dialogEditPromoVisible = true
          break
        case 'deactivate':
          store.dispatch('concessionaire/deactivateModels', [this.idVisibleModel])
            .then(() => {
              this.clearModelsSelected()
              this.renderTable()
            })
          break
      }
    },
    onCheckedModel (selection, {id, status}) {
      this.toggleCheckedModel('idsModels', id)
      if(status == 1){
        this.toggleCheckedModel('idsModelsActives', id)
      }
      else{
        this.toggleCheckedModel('idsModelsDesactives', id)
      }
    },
    toggleCheckedModel(keyChecked, id){
      let indexSelected = this.checkboxSelected[keyChecked].indexOf(id)
      if(indexSelected !== -1) {
        this.checkboxSelected[keyChecked].splice(indexSelected, 1);
      }
      else{
        this.checkboxSelected[keyChecked].push(id)
      }
    },
    isModelDisabled (status) {
      return {
        'is-disabled': (status === 0)
      }
    },
    keepCheckedRows () {
      for(let model of this.modelsByModel()){
        if (this.checkboxSelected.idsModels.includes(model.id)) {        
          this.$nextTick(() => this.$refs.multipleTable.toggleRowSelection(model))
        }
      }
    },
    clearModelsSelected(){
      this.$refs.multipleTable.clearSelection();
      this.checkboxSelected.idsModels = []
      this.checkboxSelected.idsModelsActives = []
      this.checkboxSelected.idsModelsDesactives = []
    },
    onSelectAllRows (models) {
      for(let keyChecked in this.checkboxSelected){
        for(let model of this.modelsByModel()){
          let indexSelected = this.checkboxSelected[keyChecked].indexOf(model.id)
          if(indexSelected !== -1) {
            this.checkboxSelected[keyChecked].splice(indexSelected, 1);
          }
        }
      }
      if(models.length > 0){
        for(let {id, status} of models){
          this.onCheckedModel(undefined, {id, status})
        }
      }
    },
    renderTable(){
      this.loading = true
      let params = {}

      if(this.tempSltStatus !== ''){
        params['active'] = this.tempSltStatus
      }
      if(this.tempSltBrand != ''){
        params['idBrand'] = this.tempSltBrand
      }
      if(this.tempSltModel != ''){
        params['idModel'] = this.tempSltModel
      }

      params['page'] = this.currentPage
      params['limit'] = this.pageSize
      store.dispatch('concessionaire/getModels', params)
    },
    
    //Pagination
    onPage(currentPage){
      this.currentPage = currentPage
      this.renderTable()
    },
  }
}
