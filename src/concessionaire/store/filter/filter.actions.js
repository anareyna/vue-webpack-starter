import ServiceAds from 'concessionaire/services/ads.service'
let oServiceAds = new ServiceAds()

export default {
  getFiltersBrands ({ commit, state }, id) {
    oServiceAds.getBrands(id)
      .then((data) => {
        commit('UPDATE_BRANDS', data.data)
      })
  },
  getFilterModelsByBrand ({ commit, state }, params) {
    oServiceAds.getModelsByBrand(params)
      .then((data) => {
        commit('UPDATE_MODELS', data.data)
      })
  },
  setStatusFilter ({ commit, state }, statusId) {
    commit('UPDATE_STATUS', statusId)
  },
  setBrandFilter ({ commit, state }, brandId) {
    commit('UPDATE_BRAND', brandId)
  },
  setModelFilter ({ commit, state }, modelId) {
    commit('UPDATE_MODEL', modelId)
  }
}
