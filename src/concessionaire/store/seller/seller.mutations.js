const UPDATE_RESPONSE = 'UPDATE_RESPONSE'

export default {
  [UPDATE_RESPONSE] (state, response) {
    state.methodsUpdate = {
      response: response
    }
  }
}
