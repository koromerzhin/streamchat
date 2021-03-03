export default {
  clear (state) {
    state.messages = []
  },
  add (state, message) {
    state.messages.push(message)
  }
}
