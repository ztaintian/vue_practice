const module = {
  state: {
    ss: 1,
    gg: 2,
    mm: 3,
    aa: 4
  },
  mutations: {
    increment (state) {
      state.mm++
    }
  },
  actions: {
    async incrementAA (context) {
      var aa = await context.commit('increment')
      return 'aa' + aa
    }
  },
  getters: {
    doubleCount: (state) => {
      return state.gg * 2
    }
  }
}
export default module
