import Vue      from 'vue'
import App      from 'components/App.vue'
import { sync } from 'vuex-router-sync'

import router from '~/router'
import store  from '~/store'

sync(store, router)

export default new Vue({
  store,
  router,
  ...App
})
