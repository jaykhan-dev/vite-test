import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ASA from '../components/ASA.vue'
import Mint from '../components/Mint.vue'
import Search from '../components/Search.vue'
import Marketplace from '../components/Marketplace.vue'
import Wallet from '../components/Wallet.vue'
import ProductPage from '../components/ProductPage.vue'

const routes = [
    { path: '/', name: 'Home', component: Home},
    { path: '/asa', name: 'ASA', component: ASA },
    { path: '/mint', name: 'Mint', component: Mint },
    { path: '/search', name: 'Search', component: Search },
    { path: '/marketplace', name: 'Marketplace', component: Marketplace },
    { path: '/wallet', name: 'Wallet', component: Wallet },
    { path: '/productpage', name: 'ProductPage', component: ProductPage },

]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router