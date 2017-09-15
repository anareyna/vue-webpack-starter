const UPDATE_HEADER_PACKAGE = 'UPDATE_HEADER_PACKAGE'
const UPDATE_PACKAGES = 'UPDATE_PACKAGES'
const UPDATE_CURRENT_PACKAGE = 'UPDATE_CURRENT_PACKAGE'

export default {
  [UPDATE_HEADER_PACKAGE] (state, data) {
    state.packages[3] = data // activo
  },

  [UPDATE_PACKAGES] (state, data) {
    state.packages = Object.assign({}, state.packages, data)
  },

  [UPDATE_CURRENT_PACKAGE] (state, { data, currentPackage }) {
    state.packages[currentPackage] = data
  }
}
