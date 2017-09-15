import { SERVICE_URL } from './../concessionaire.constants'
import { Http } from './../../common/libs/http.lib'

export default class ServiceAds extends Http {
  url: any
  urlLOCAL: string
  urlFake: string
  params: any
  constructor () {
    super()
    this.url = `${SERVICE_URL}/concessionaire`
    this.urlLOCAL = 'https://now2-tvapztqrhv.now.sh'
    this.urlFake = 'https://us-central1-proyect-df7da.cloudfunctions.net/app'
  }

  activateAds (rows, cb) {
    cb(true) // eslint-disable-line standard/no-callback-literal
        // this.get(this.url + "data").then((response)=>{
        //     response.data.forEach((brand, indexBrand) => {
        //         brand.models.forEach((model, indexModel) => {
        //             if (rows.indexOf(model.id) > -1) {
        //                 response.data[indexBrand].models[indexModel].status = true;
        //             }
        //         })
        //     })
        //     this.post(this.url+ 'data', response.data);
        // })
  }

  decoratorUrl () {
    this.url = this.urlLOCAL
    let baseUrl1 = this.url + '/data'
    // let baseUrl = this.url + '/data'
    // let params = this.params
    // if (params.idUser) {
    //   baseUrl += `/${params.idUser}`
    // }
    // if (params.brand) {
    //   baseUrl += `/brand/${params.brand}`
    // }
    // if (params.model) {
    //   baseUrl += `/model/${params.model}`
    // }
    // baseUrl += `?${param(params.qs)}`
    // console.log('baseUrl', baseUrl)
    return baseUrl1
  }

  includeNamesBrands (data) {
    let brands = this.params.brands
        // return data.map((row, e)=>{
        //     return brands.includes(row.brand)
        //     //return
        // })
    data.find(row => {
      brands.find(d => {
        if (row.id_brand === d.value) {
          row['brand'] = d.label
        }
      })
    })
  }

  getBrands (idBrand) {
    let idUser = window.localStorage.getItem('idUser')
    return this.get(`${this.urlFake}/${idUser}/brands?vehicleType=${idBrand}`).then(response => response.data)
  }

  getModelsByBrand (params) {
    return this.get(`${this.urlFake}/models?vehicleType=${params.idVehicleType}&idBrand=${params.idBrand}`).then(response => response.data)
  }

  decoratorData (cb) {
    let data = []
    let url = this.decoratorUrl()
    this.get(url).then((response) => {
      data = response.data

      this.includeNamesBrands(data)
            // if (response.data.length)
            //     brandsArray = response.data
            // else
            //     brandsArray = [response.data]

            // brandsArray.forEach((brand, i)=>{
            //     brand.models.forEach((model, i)=>{
            //         data.push({
            //             id          : model.id,
            //             brand       : brand.name,
            //             model       : model.name,
            //             versiones   : model.versiones,
            //             status      : model.status,
            //             interesados : model.interesados
            //         })
            //     })
            // })
      cb(data)
    })
  }

  getAds (params, cb) {
    log('params', params)
    this.params = params
    this.decoratorData((data) => {
      cb(data)
    })
  }

  getFilterBrand (cb) {
    let brands = []
    this.get(this.url + '/filters').then((response) => {
      response.data.forEach((brand, i) => {
        brands.push({
          value: brand.id,
          label: brand.name
        })
      })
      cb(brands)
    })
  }
  getModels (query) {
    let idUser = window.localStorage.getItem('idUser')
    console.log('params', `${this.urlFake}/${idUser}/models${query}`)
    return this.get(`${this.urlFake}/${idUser}/models${query}`).then(response => response.data.data)
  }

    // getAviso(id){
    //     return this.get(this.url + "/" + id)
    // }

    // deleteAvisos(id){
    //     return this.delete(this.url + "/" + id)
    // }

    // methods: {
    //     greet(event){
    //             let form = new formData();
    //             form.append('id', {id:1,id:2,id:3,id:4});
    //             this.$axios({
    //                 method:"post",
    //                 //url : "http://local.services.neoauto.com:9292/v1/billing/transaction/pay",
    //                 url:'http://local.services.neoauto.com:9292/v1/concessionaire/post',
    //                 data: form,
    //             }).then((response) =>{
    //                 console.log("response",response.data);
    //             })

    //         },
    //         isDisabled(estado){
    //             return {
    //                 'is-disabled': (estado==='Inactivo')
    //             }
    //         }
    // }
}