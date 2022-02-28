export default {
  namespaced: true,
  state: () => ({
    menu: {
      top: 0,
      left: 0
    }
  }),
  mutations: {
    showMenu(state, { top, left }) {
      state.menu = {
        top,
        left
      }
    }
  },
  actions: {

  },

}