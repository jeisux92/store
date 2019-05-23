export const state = () => ({
  counter: 0,
  subLevel: 0,
  car: [],
  filter: {
    price: [0, 100000],
    quantity: 0,
    available: true
  }
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  setSubLevel(state, id) {
    state.subLevel = id;
  },
  setFilter(state, filter) {
    state.filter = { ...state.filter, ...filter };
  }
}
