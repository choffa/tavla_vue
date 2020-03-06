import Vue from 'vue'
import Router from 'vue-router'
import MainView from './views/MainView.vue'
import LandingPage from './views/LandingView.vue';
import { getLatLon } from './utils/url.util'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingPage
    },
    {
      path: '/boards/:coordinates?',
      name: 'boards',
      component: MainView,
      props: (route) => getLatLon(route.params.coordinates)
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
