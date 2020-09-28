import Vue from 'vue'
import VueRouter from 'vue-router'
import Giphy from '../views/Giphy.vue'
import Extra from '../views/Extra'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Giphy',
    component: Giphy
  },
  {
    path: '/extra',
    name: 'Extra',
    component: Extra
  }
]

const router = new VueRouter({
  routes
})

export default router
