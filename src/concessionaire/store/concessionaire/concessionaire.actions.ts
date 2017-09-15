import { ConcessionaireService } from '../../services/concessionaire.service'
import * as user from '../../models/user.instance'
import { Models } from '../../models/models.model'

let oConcessionaireService = new ConcessionaireService()

export default {
  getModels ({ commit, state, rootState }, params) {
    params.vehicleType = rootState.user.vehicleSelected.idVehicleType
    return oConcessionaireService.getModels(params)
    .then(({data}) => {
      intanceUSer(data)
      commit('UPDATE_MODELS_USER', data)
    })
  },
  activateModels ({ commit }, idsModels) {
    return oConcessionaireService.activateModels(idsModels, 1)
  },
  deactivateModels ({ commit }, idsModels): Promise<any>  {
    return oConcessionaireService.activateModels(idsModels, 0)
  }
}

let intanceUSer = (data) => {
  let listModel: Array<Models> = []
  if (data.items && data.items.length > 0) {
    data.items.forEach((model) => {
      listModel.push(new Models(model.id, model.name, model.versionsCount, model.flagActive, 7, model.idBrand))
    })
  }
  user.default.concessionarie.addModels(listModel)
}
