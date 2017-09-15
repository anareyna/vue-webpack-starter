const UPDATE_DEPARTMENTS = 'UPDATE_DEPARTMENTS'
const UPDATE_PROVINCES = 'UPDATE_PROVINCES'
const UPDATE_DISTRICTS = 'UPDATE_DISTRICTS'
const CLEAN_DISTRICTS = 'CLEAN_DISTRICTS'

export default {
  [UPDATE_DEPARTMENTS] (state, departments) {
    state.departments = departments
  },
  [UPDATE_PROVINCES] (state, provinces) {
    state.provinces = provinces
  },
  [UPDATE_DISTRICTS] (state, districts) {
    state.districts = districts
  },
  [CLEAN_DISTRICTS] (state) {
    state.districts = []
  }
}
