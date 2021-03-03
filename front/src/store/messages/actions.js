export default {
  add (store, message) {
    const messages = store.getters.get
    const id = message.userstate.id
    const data = messages.filter(message => message.userstate.id === id)
    if (data.length === 0) {
      store.commit('add', message)
    }
  }
}
