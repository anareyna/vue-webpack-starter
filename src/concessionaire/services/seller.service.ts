import { SERVICE_URL } from './../concessionaire.constants'
import { Http } from './../../common/libs/http.lib'

export default class ServiceSeller extends Http {
  url: any
  constructor () {
    super()
    this.url = `${SERVICE_URL}/concessionaire`
  }

  updateSeller (params: any): Promise<any> {
    return this.put(`${this.url}/sellers-type/${params.id}`, params.fields)
    .then(response => response)
  }
}
