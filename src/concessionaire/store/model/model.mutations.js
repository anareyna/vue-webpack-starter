const UPDATE_MODELS = 'UPDATE_MODELS'
const CLEAN_MODELS = 'CLEAN_MODELS'

export default {
  [UPDATE_MODELS] (state, models) {
    state.models = models
  },
  [CLEAN_MODELS] (state, models) {
    state.models = []
  }
}
