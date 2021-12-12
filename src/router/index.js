import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Strategy from '../views/Strategy.vue'

const routes = [
    { path: '/', name: 'Home', component: Home},
    { path: '/about', name: 'About', component: About},
    { path: '/strategy', name: 'Strategy', component: Strategy }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router