export const state = () => ({
  counter: 0,
  subLevel: 0,
  car: []
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  setSubLevel(state, id) {
    state.subLevel = id;
  }
}
export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (req.session.user) {
      commit('user', req.session.user)
    }
  }
}
