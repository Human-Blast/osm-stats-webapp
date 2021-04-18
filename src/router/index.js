import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import OSM from '../components/osmdata.vue'
import India from '../components/india.vue'
import SouthAfrica from '../components/southafrica.vue'
import Russia from '../components/russia.vue'
import Brazil from '../components/brazil.vue'
import China from '../components/china.vue'
import Test from '../components/test.vue'
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/',
    name: 'osm',
    component: OSM
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  {
    path: '/india',
    name: 'india',
    component: India
  },
  {
    path: '/southafrica',
    name: 'southafrica',
    component: SouthAfrica
  },
  {
    path: '/russia',
    name: 'russia',
    component: Russia
  },
  {
    path: '/brazil',
    name: 'brazil',
    component: Brazil
  },
  {
    path: '/china',
    name: 'china',
    component: China
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
