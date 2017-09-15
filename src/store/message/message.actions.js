export default {
  upd ({ commit }, param) {
    console.log('param', param)
    this.$message({
      message: 'this.message',
      type: 'warning'
    })
  }
  // getProvincesByDepartment ({ commit }, idDepartment) {
  //   oServiceUbigeo.getProvincesByDepartment(idDepartment, (provinces) => {
  //     commit('UPDATE_PROVINCES', provinces)
  //   })
  // },
  // getDistrictsByProvince ({ commit }, params) {
  //   oServiceUbigeo.getDistrictsByProvince(params, (districts) => {
  //     commit('UPDATE_DISTRICTS', districts)
  //   })
  // }
}
