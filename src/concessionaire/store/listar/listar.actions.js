import ServiceAds from 'concessionaire/services/ads.service'
let oServiceAds = new ServiceAds()
const util = {
  jsonToQueryString (json) {
    return '?' +
    Object.keys(json).map(function (key) {
      return encodeURIComponent(key) + '=' +
      encodeURIComponent(json[key])
    }).join('&')
  },
  deleteAttributeNull (obj) {
    let newObj = {}
    for (let index in obj) {
      if (obj[index]) {
        newObj[index] = obj[index]
      }
    }
    return newObj
  }
}
export default {
  listModels ({ commit, state }) {
    let params = {
      idUser: window.localStorage.getItem('idUser'),
      brands: state.brands,
      brand: state.filtersSelected.brand,
      status: state.filtersSelected.status,
      model: state.filtersSelected.model,
      qs: {
        page: state.pageSelected,
        typeVehicle: state.idVehicleType,
        pageSize: state.pageSize
      }
    }
    oServiceAds.getAds(params, (data) => {
      state.dataList = data
    })
  },
  getModels ({ commit, state }, params) {
    params = util.deleteAttributeNull(params)
    let query = util.jsonToQueryString(params)
    console.log('ingreso params', query)
    oServiceAds.getModels(query)
    .then((data) => {
      commit('UPDATE_MODELS', data)
    })
  }
}
