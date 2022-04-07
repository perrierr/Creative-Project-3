import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Dashboard,
    children: [
      {
      path: '/',
      component: () => import('../views/HomeView')
      },
      {
      path: '/experience',
      component: () => import('../views/Experience')
      },
      {
      path: '/summer',
      component: () => import('../views/Summer')
      },
      // {
      // path: '/emotional',
      // component: () => import('../views/EmotionalView')
      // },
      {
      path: '/financial',
      component: () => import('../views/Financial')
      },
      // {
      // path: '/health',
      // component: () => import('../views/HealthView')
      // },
      {
      path: '/intellectual',
      component: () => import('../views/IntellectualView')
      },
      // {
      // path: '/spiritual',
      // component: () => import('../views/SpiritualView')
      // },
      // {
      // path: '/family',
      // component: () => import('../views/FamilyView')
      // }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
