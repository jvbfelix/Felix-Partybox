import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    presentes: false,
  },
  mutations: {
    presentesOn: (state) => { 
      state.presentes = true
    },
    presentesOff: (state) => { 
      state.presentes = false
    },
  },
  actions: {
    presentesOn () {
      this.commit('presentesOn')
    },
    presentesOff () {
      this.commit('presentesOff')
    },
  },
  getters: {
    presentes: state => state.presentes,
  },
  modules: {
  }
})
