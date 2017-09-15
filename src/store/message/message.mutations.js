const UPDATE_DATA_MESSAGE = 'UPDATE_DATA_MESSAGE'

export default {
  [UPDATE_DATA_MESSAGE] (state, {type, message}) {
    state.dataMessage = {...state.dataMessage, type, message}
  }
}
