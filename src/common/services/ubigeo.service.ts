import { SERVICE_URL } from './constants'
import { Http } from './../libs/http.lib'

export default class serviceUbigeo extends Http {
  url: any
  constructor () {
    super()
    this.url = `${SERVICE_URL}/listing`
  }

  getDepartments () {
    return this.get(`${this.url}/departments`)
    .then((response: any) => {
      return response.data.data.map(department => {
        return {
          id: department.id,
          name: department.name
        }
      })
    })
  }

  getProvincesByDepartment (idDepartment) {
    return this.get(`${this.url}/departments/${idDepartment}/provinces`)
    .then((response: any) => {
      return response.data.data.map(province => {
        return {
          id: province.id,
          name: province.name
        }
      })
    })
  }

  getDistrictsByProvince ({idDepartment, idProvince}) {
    return this.get(`${this.url}/departments/${idDepartment}/provinces/${idProvince}/districts`)
    .then((response: any) => {
      return response.data.data.map(district => {
        return {
          id: district.id,
          name: district.name
        }
      })
    })
  }
}
