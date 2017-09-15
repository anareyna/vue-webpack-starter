import { ConcessionaireService } from '../../services/concessionaire.service'
import * as user from '../../models/user.instance'
import { Brand } from '../../models/brand.model'
import store from 'concessionaire/store'

let oConcessionaireService = new ConcessionaireService()

export default {
  getBrands ({ commit, rootState }) {
    oConcessionaireService.getBrands(rootState.user.vehicleSelected.idVehicleType)
    .then((data) => {
      intanceUSer(data, rootState.user.vehicleSelected.idVehicleType)
      commit('UPDATE_BRANDS', data.data)
      // store.commit('user/OUSER', user.default)

    })
  }
}

let intanceUSer = ({data}, idTypeVechicle) => {
  switch (idTypeVechicle) {
    case 1 :
      data.forEach((brand) => {
        user.default.concessionarie.Autos.addBrands(new Brand(brand.id, brand.name))
      })
      break
    case 2 :
      data.forEach((brand) => {
        user.default.concessionarie.Motos.addBrands(new Brand(brand.id, brand.name))
      })
      break
    case 4 :
      data.forEach((brand) => {
        user.default.concessionarie.BusesyCamiones.addBrands(new Brand(brand.id, brand.name))
      })
      break
  }
}
