import { SERVICE_URL } from './../concessionaire.constants'
import { Http } from './../../common/libs/http.lib'

export default class servicePackages extends Http {
  url: any
  constructor () {
    super()
    this.url = `${SERVICE_URL}/concessionaire`
  }

  getHeaderPackage (idSeller: number): Promise<any> {
    return this.get(`${this.url}/sellers-type/${idSeller}/packages?idStatus=3`)
    .then(({ data }) => data)
  }

  getPackagesOnDemand(params): Promise<any> {
    let idSeller = params.idSeller
    let idStatus = params.currentTab
    let page = params.currentPage
    let limit = params.pageSize
    return this.get(`${this.url}/sellers-type/${idSeller}/packages?idStatus=${idStatus}&page=${page}&limit=${limit}`)
      .then(response => response.data)
  }

  getPackages(idSeller: number): Promise<any> {
    return this.getAll([
      `${this.url}/sellers-type/${idSeller}/packages?idStatus=1`, // expired
      `${this.url}/sellers-type/${idSeller}/packages?idStatus=2`, // pending payment
      `${this.url}/sellers-type/${idSeller}/packages?idStatus=3`, // active
      `${this.url}/sellers-type/${idSeller}/packages?idStatus=4`  // pending activation
    ]).then(response => {
      return {
        1: response[0].data.data,
        2: response[1].data.data,
        3: response[2].data.data,
        4: response[3].data.data
      }
    })
  }

  getDetailToolTip (idPackage: number, idPackageDurationPrice: number): Promise<any> {
    return this.get(`${this.url}/packages/${idPackage}?time=${idPackageDurationPrice}`)
      .then(response => response.data)
 }
  deletePackage (idPackage: number) : Promise<any> {
    return this.delete(`${this.url}/entity-packages/${idPackage}`)
      .then(response => response.data)
  }
}