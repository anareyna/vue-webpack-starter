import { serviceUser } from '../../services/user.service'
import { ConcessionaireService } from '../../services/concessionaire.service'
import { ListingService } from '../../services/listing.service'

let oConcessionaireService = new ConcessionaireService()
let oServiceUser = new serviceUser()
let oListingService = new ListingService()

export default {
  getUser ({ commit, state }, id) {
    oServiceUser.getData(id)
    .then(({data}) => {
        let user = {}
        user[data.user.id] = {
          id: data.user.id,
          name: data.user.name,
          idUserType: data.user.idUserType,
          concessionaire: [data.concessionaire.id]
        }

        let concessionaire = {}
        concessionaire[data.concessionaire.id] = {
          id: data.concessionaire.id,
          name: data.concessionaire.name,
          mail: data.concessionaire.mail,
          seller: data.concessionaire.sellersType.map(item => item.id)
        }

        let seller = {}        
        data.concessionaire.sellersType.find(_seller => {
          seller[_seller.id] = {
            id: _seller.id,
            idVehicleType: _seller.idVehicleType,
            nameVehicleType: _seller.nameVehicleType
          }          
        })

        commit('E_UPDATE_USER', user)
        commit('E_UPDATE_CONCESSIONAIRE', concessionaire)
        commit('E_UPDATE_SELLER', seller)
    })
  },
  
  getBrands ({ commit, state }, idVehicleType) {    
    oConcessionaireService.getBrands(idVehicleType)
    .then(({data}) => {
      let brands = {}      
      data.find(_brand => {        
        brands[_brand.id] = {
          id: _brand.id,
          name: _brand.name
        }
      })      
      commit('E_UPDATE_BRANDS', brands)      
    })
  },

  getModels ({ commit, state }, {idVehicleType, idBrand}) {    
    oListingService.getModelsByBrand({
      idVehicleType,
      idBrand
    }).then(({data}) => {      
      let models = {}      
      data.find(_model => {        
        models[_model.id] = {
          id: _model.id,
          name: _model.name
        }
        console.log('_model', _model)
      })      
      commit('E_UPDATE_MODELS', models)       
    })
  }
}