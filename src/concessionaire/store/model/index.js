import state from './model.state'
import getters from './model.getters'
import actions from './model.actions'
import mutations from './model.mutations'

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
