import { BASE_URL } from './constants'
import { Http } from './../libs/http.lib'

export class ServiceToken extends Http {
  url: string
  constructor () {
    super()
    this.url = `${BASE_URL}/ajax/auth`
  }

  getToken () {
    return this.get(`${this.url}/get-token`)
    .then(response => response.data)
  }
}
