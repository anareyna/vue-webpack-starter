import { SERVICE_URL } from './../concessionaire.constants'
import { Http } from './../../common/libs/http.lib'

export class ListingService extends Http {
  url: any
  params: any
  constructor () {
    super()
    this.url = `${SERVICE_URL}/listing`
  }

  getModelsByBrand ({idVehicleType, idBrand}) {
    return this.get(`${this.url}/models`, {
        vehicleType: idVehicleType,
        idBrand: idBrand
    }).then(response => response.data)
  }
}