export default {
  clear (state) {
    state.users = []
  },
  add (state, user) {
    state.users.push(user)
  },
  delete (state, user) {
    state.users.filter(index => index !== user)
  }
}
