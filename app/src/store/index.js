import { createStore } from 'vuex'

export default createStore({
  state: {
    message: false
  },
  getters: {
    message: state => {
      return state.message
    }

  },
  mutations: {
    MESSAGE (state, message) {
      state.message = message
    },
    CLEAR_MESSAGE(state) {
      state.message = null
    },
  },
  actions: {
    message({ commit }, message) {
      commit('MESSAGE', message)
      setTimeout(() => {
        commit('CLEAR_MESSAGE')
      }, 3000)
    },
    clearMessage({ commit }) {
      commit('CLEAR_MESSAGE')
    }
  },
  modules: {
  }
})
