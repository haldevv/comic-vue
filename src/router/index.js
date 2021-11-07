import Vue from 'vue'
import VueRouter from 'vue-router'
import Comic from '../views/Comic.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Comic', component: Comic },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
