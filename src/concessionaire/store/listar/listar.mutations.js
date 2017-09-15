const UPDATE_BRANDS = 'UPDATE_BRANDS'
const UPDATE_STATUS = 'UPDATE_STATUS'
const UPDATE_BRAND = 'UPDATE_BRAND'
const UPDATE_MODEL = 'UPDATE_MODEL'
const UPDATE_PAGE = 'UPDATE_PAGE'
const UPDATE_VEHICLE_SELECTED = 'UPDATE_VEHICLE_SELECTED'
const UPDATE_USER = 'UPDATE_USER'
const UPDATE_MODELS = 'UPDATE_MODELS'

export default {
  [UPDATE_BRANDS] (state, brands) {
    state.brands = brands
  },
  [UPDATE_STATUS] (state, statusId) {
    state.filtersSelected.status = statusId
  },
  [UPDATE_BRAND] (state, brandId) {
    state.filtersSelected.brand = brandId
  },
  [UPDATE_MODEL] (state, modelId) {
    state.filtersSelected.model = modelId
  },
  [UPDATE_PAGE] (state, page) {
    state.pageSelected = page
  },
  [UPDATE_VEHICLE_SELECTED] (state, vehicleSelected) {
    state.idVehicleType = vehicleSelected.idVehicleType
  },
  [UPDATE_USER] (state, data) {
    state.idVehicleType = data.data.concessionaire.sellersType[0].idVehicleType
  },
  [UPDATE_MODELS] (state, data) {
    state.models = data
  }
}
