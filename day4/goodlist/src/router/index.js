import Vue from 'vue'
import VueRouter from 'vue-router'
import Goods from '../components/Goods.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/goods' },
  { path: '/goods', component: Goods }
]

const router = new VueRouter({
  routes
})

export default router
