import { createRouter, createWebHistory } from 'vue-router'
import Stories from '../views/Stories.vue'
import Story from '../components/Story.vue'
import Home from '../views/Home.vue'
import Strategy from '../views/Strategy.vue'

const routes = [
    { path: '/', name: 'Home', component: Home},
    { path: '/stories', name: 'Stories', component: Stories},
    { path: '/stories/:id', name: 'Story', component: Story},
    { path: '/strategy', name: 'Strategy', component: Strategy }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router