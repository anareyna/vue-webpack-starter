const UPDATE_USER = 'UPDATE_USER'
const UPDATE_VEHICLE_SELECTED = 'UPDATE_VEHICLE_SELECTED'
const UPDATE_HEADER_PACKAGE = 'UPDATE_HEADER_PACKAGE'
const UPDATE_PACKAGES = 'UPDATE_PACKAGES'
const UPDATE_SELLER_PACKAGE = 'UPDATE_SELLER_PACKAGE'
const OUSER = 'OUSER'

export default {
  [UPDATE_USER] (state, data) {
    state.user = data.data.user
    state.entity = data.data.entity
    state.concessionaire = data.data.concessionaire
    state.vehicleSelected = state.concessionaire.sellersType.find(item => item.idVehicleType === data.data.idVehicleType)
  },

  [UPDATE_VEHICLE_SELECTED] (state, vehicleSelected) {
    state.vehicleSelected = vehicleSelected
  },

  [UPDATE_HEADER_PACKAGE] (state, data) {
    state.headerPackage = data
  },

  [UPDATE_PACKAGES] (state, data) {
    state.packages = data
  },

  [UPDATE_SELLER_PACKAGE] (state, data) {
    state.sellerPackage = data
  },

  [OUSER] (state, data) {
    state.oUser = Object.assign({}, state.oUser, data)
  }
}
