import ServiceUbigeo from 'common/services/ubigeo.service'
let oServiceUbigeo = new ServiceUbigeo()

export default {
  getDepartments ({ commit, state }) {
    oServiceUbigeo.getDepartments()
    .then((departments) => {
      commit('UPDATE_DEPARTMENTS', departments)
    })
  },
  getProvincesByDepartment ({ commit }, idDepartment) {
    oServiceUbigeo.getProvincesByDepartment(idDepartment)
    .then((provinces) => {
      commit('UPDATE_PROVINCES', provinces)
    })
  },
  getDistrictsByProvince ({ commit }, params) {
    oServiceUbigeo.getDistrictsByProvince(params)
    .then((districts) => {
      commit('UPDATE_DISTRICTS', districts)
    })
  }
}
