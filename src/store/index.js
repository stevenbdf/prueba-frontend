import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: [],
    categories: [],
    locations: []
  },
  mutations: {
    fetchMenu(state, menu) {
      state.menu = menu
    },
    fetchCategories(state, categories) {
      state.categories = categories
    },
    fetchLocations(state, locations) {
      state.locations = locations
    }
  },
  getters: {
    menu: state => state.menu,
    categories: state => state.categories,
    locations: state => state.locations
  },
})
