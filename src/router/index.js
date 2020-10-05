import Vue from 'vue'
import VueRouter from 'vue-router'

import Giphy from '../views/Giphy.vue'
import Extra from '../views/Extra'
import Internationalization from "@/views/Internationalization";

Vue.use(VueRouter)

const routes = [
  {
    path: '/giphy',
    name: 'Giphy',
    component: Giphy
  },
  {
    path: '/international',
    name: 'Internationalization',
    component: Internationalization
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
