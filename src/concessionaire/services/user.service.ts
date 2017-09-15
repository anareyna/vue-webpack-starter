import { SERVICE_URL } from './../concessionaire.constants'
import { Http } from './../../common/libs/http.lib'

export class serviceUser extends Http {
  url: any
  constructor () {
    super()
    this.url = `${SERVICE_URL}/concessionaire`
  }

  getData (idUser: number): Promise<any> {
    return this.get(`${this.url}/users/${idUser}`)
    .then(response => response.data)
  }
}