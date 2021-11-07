import Vue from 'vue'
import Vuex from 'vuex'
import { comicActions } from './comic/actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    comic: {
      title: '',
      image: {
        url: '',
        alt: ""
      },
      rate: 0,
    }
  },
  getters: {
    comic: (state) => {
      return state.comic
    }
  },
  mutations: {
    setComic(state, data) {
      state.comic = data
    }
  },
  actions: {
    ...comicActions
  },
})
