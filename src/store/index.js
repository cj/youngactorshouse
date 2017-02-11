import Vue  from 'vue'
import Vuex from 'vuex'

import navigation from './navigation'

Vue.use(Vuex)

const store = new Vuex.Store({
  // http://vuex.vuejs.org/en/strict.html
  strict: process.env.NODE_ENV !== 'production',
  state: {},
  modules: { navigation }
})

export default store
