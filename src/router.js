import Vue                    from 'vue'
import Router                 from 'vue-router'

import HomeView from 'views/Home'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomeView }
  ]
})

export default router
