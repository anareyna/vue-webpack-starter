import { ListingService } from '../../services/listing.service'
import * as user from '../../models/user.instance'
import { Model } from '../../models/model.model'
import store from 'concessionaire/store'


let oListingService = new ListingService()

export default {
  getModelsByBrand ({ commit, rootState }, idBrand) {
    oListingService.getModelsByBrand({
      idVehicleType: rootState.user.vehicleSelected.idVehicleType,
      idBrand
    }).then((data) => {
      intanceUSer(data, idBrand, rootState.user.vehicleSelected.idVehicleType)
      commit('UPDATE_MODELS', data.data)
      // store.commit('user/OUSER', user.default)      
    })
  }
}

let intanceUSer = ({data}, idBrand, idTypeVechicle) => {
  switch (idTypeVechicle) {
    case 1 :
    data.forEach((model) => {
      user.default.concessionarie.Autos.getBrand(idBrand).addModel(new Model(model.id, model.name))    
    })
    break
    case 2 :
    data.forEach((model) => {
      user.default.concessionarie.Motos.getBrand(idBrand).addModel(new Model(model.id, model.name))
    })
    break
    case 4 :
    data.forEach((model) => {
      user.default.concessionarie.BusesyCamiones.getBrand(idBrand).addModel(new Model(model.id, model.name))
    })
    break
  }
}