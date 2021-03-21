import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ibreli-gauge',
    name: 'IbreliGauge',
    component: () => import('../views/IbreliGauge.vue')
  },
  {
    path: '/gauge',
    name: 'Gauge',
    component: () => import('../views/Gauge.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/digitalgauge',
    name: 'DigitalGauge',
    component: () => import('../components/VerticalDigitalGauge.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
