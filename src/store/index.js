import Vue  from 'vue'
import Vuex from 'vuex'

import db from '~/lib/firebase'

Vue.use(Vuex)

const store = new Vuex.Store({
  // http://vuex.vuejs.org/en/strict.html
  strict: process.env.NODE_ENV !== 'production',
  state: {
    menus: []
  },
  mutations: {
    setMenus: (state, data) => {
      state.menus = data
    }
  },
  getters: {
    menus: (state) => {
      return state.menus
    }
  }
})

db.ref('menus').on('value', snapshot => {
  store.commit('setMenus', snapshot.val())
})

export default store
