import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ASA from '../components/ASA.vue'
import Mint from '../components/Mint.vue'
import Search from '../components/Search.vue'
import Marketplace from '../components/Marketplace.vue'
import Wallet from '../components/Wallet.vue'
import Nftpage from '../components/Nftpage.vue'

const routes = [
    { path: '/', name: 'Home', component: Home},
    { path: '/asa', name: 'ASA', component: ASA },
    { path: '/mint', name: 'Mint', component: Mint },
    { path: '/search', name: 'Search', component: Search },
    { path: '/marketplace', name: 'Marketplace', component: Marketplace },
    { path: '/wallet', name: 'Wallet', component: Wallet },
    { path: '/nftpage', name: 'Nftpage', component: Nftpage },

]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router