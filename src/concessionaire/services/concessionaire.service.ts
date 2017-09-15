import { SERVICE_URL } from './../concessionaire.constants'
import { Http } from './../../common/libs/http.lib'

export class ConcessionaireService extends Http {
  url: any
  params: any
  constructor () {
    super()
    this.url = `${SERVICE_URL}/concessionaire`
  }

  getBrands (idBrand) {
    let idUser = window.localStorage.getItem('idUser')
    return this.get(`${this.url}/${idUser}/brands`, {
      vehicleType: idBrand
    }).then(response => response.data)
  }

  getModels (params) {
    let idUser = window.localStorage.getItem('idUser')
    return this.get(`${this.url}/${idUser}/models`, params).then(({data}) => data)
  }

  activateModels (idsModels: any, status): Promise<any> {
    // console.log('idsModels', idsModels)
    // console.log('status', status)
    let idUser = window.localStorage.getItem('idUser')
    return this.putAll(
      idsModels.map(id => {
        return {url: `${this.url}/${idUser}/models/${id}`, params:{flagActive:status}}
      })
    )
  }
}