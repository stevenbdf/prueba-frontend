import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: [],
    categories: []
  },
  mutations: {
    fetchMenu(state, menu) {
      state.menu = menu
    },
    fetchCategories(state, categories) {
      state.categories = categories
    }
  },
  getters: {
    menu: state => state.menu,
    categories: state => state.categories
  },
  actions: {
  },
  modules: {
  }
})
