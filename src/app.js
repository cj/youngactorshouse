import Vue      from 'vue'
import { sync } from 'vuex-router-sync'

import App    from '~/components/App.vue'
import router from '~/router'
import store  from '~/store'

sync(store, router)

export default new Vue({
  store,
  router,
  ...App
})
