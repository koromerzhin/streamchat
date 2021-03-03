export default {
  add (store, user) {
    const users = store.getters.get
    const username = user.username
    const data = users.filter(user => user.username === username)
    if (data.length === 0) {
      store.commit('add', user)
    }
  }
}
