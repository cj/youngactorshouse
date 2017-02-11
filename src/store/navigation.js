import { db } from '~/lib/firebase'

const store = () => { return require('~/store').default }

export const namespace = (name) => { return `app/navigations/${name}` }
// getters
export const NAVIGATION = namespace('NAVIGATION')
// mutations
export const SET_NAVIGATIONS = namespace('SET_NAVIGATIONS')

db.ref('navigations').on('value', snapshot => {
  store().commit(SET_NAVIGATIONS, snapshot.val())
})

export default {
  state: {
    navigations: {}
  },

  getters: {
    [NAVIGATION]: state => name => {
      return state.navigations[name]
    }
  },

  mutations: {
    [SET_NAVIGATIONS]: (state, navigations) => {
      state.navigations = navigations
    }
  }
}
