import { serviceUser } from '../../services/user.service'
import * as user from '../../models/user.instance'
import { Concessionarie } from '../../models/concessionarie.model'
import { Seller } from '../../models/seller.model'
import { Entity } from '../../models/entity.model'

let oServiceUser = new serviceUser()

export default {
  setVehicleSelected ({ commit, state }, id) {
    let vehicleSelected = state.concessionaire.sellersType.find(item => item.idVehicleType === id)
    commit('UPDATE_VEHICLE_SELECTED', vehicleSelected)
  },

  getUser ({ commit, state }, id) {
    oServiceUser.getData(id)
    .then((data) => {
      if (data.data.concessionaire.sellersType.length > 0) {
        data.data['idVehicleType'] = state.vehicleSelected.idVehicleType || data.data.concessionaire.sellersType[0].idVehicleType
        intanceUSer(data)
        commit('UPDATE_USER', data)
        commit('OUSER', user.default)
      } else {
        console.log('El Usuario no tiene sellers')
      }
    })
  }
}

let intanceUSer = ({data}) => {
  user.default.setUser(data.user.id, data.user.idUserType, data.user.name)
  
  let oConcessionaire = new Concessionarie(data.concessionaire.id, data.concessionaire.name)  
  
  data.concessionaire.sellersType.forEach((seller: Seller)  =>{
    oConcessionaire.addSeller(new Seller(seller.id, seller.idVehicleType, seller.nameVehicleType))
  }) 

  user.default.addConcessionaire(oConcessionaire)
  user.default.addEntity(new Entity(data.entity.id, data.entity.commercialName))
}