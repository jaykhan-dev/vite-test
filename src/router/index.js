import { createRouter, createWebHistory } from 'vue-router'
import Stories from '../views/Stories.vue'
import Home from '../views/Home.vue'
import Strategy from '../views/Strategy.vue'

const routes = [
    { path: '/', name: 'Home', component: Home},
    { path: '/stories', name: 'Stories', component: Stories},
    { path: '/strategy', name: 'Strategy', component: Strategy }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router