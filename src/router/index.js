import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Financial from '../views/Financial.vue'
import Experience from '../views/Experience.vue'
import Summer from '../views/Summer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/financial',
    name: 'financial-view',
    component: Financial
  },
  {
    path: '/experience',
    name: 'experience-view',
    component: Experience
  },
  {
    path: '/summer',
    name: 'summer-view',
    component: Summer
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
