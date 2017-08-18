const module = {
  state: {
    a: 1,
    b: 2,
    count: 1
  },
  mutations: {
    increment (state) { state.count++ }
  },
  actions: {},
  getters: {
    doubleCount: (state) => {
      return state.a * 2
    }
  }
}
export default moduleA
