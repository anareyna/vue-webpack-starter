const E_UPDATE_USER = 'E_UPDATE_USER'
const E_UPDATE_CONCESSIONAIRE = 'E_UPDATE_CONCESSIONAIRE'
const E_UPDATE_SELLER = 'E_UPDATE_SELLER'
const E_UPDATE_BRANDS = 'E_UPDATE_BRANDS'
const E_UPDATE_MODELS = 'E_UPDATE_MODELS'

export default {
  [E_UPDATE_USER] (state, user) {
    state.user = user
  },
  [E_UPDATE_CONCESSIONAIRE] (state, concessionaire) {
    state.concessionaire = concessionaire
  },
  [E_UPDATE_SELLER] (state, seller) {
    state.seller = seller
  },
  [E_UPDATE_BRANDS] (state, brands) {
    state.brands = brands
  },
  [E_UPDATE_MODELS] (state, models) {
    state.models = models
  }
}
