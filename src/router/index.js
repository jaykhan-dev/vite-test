import { createRouter, createWebHistory } from 'vue-router'
import Stories from '../views/Stories.vue'
import Story from '../components/Story.vue'
import Home from '../views/Home.vue'
import Strategy from '../views/Strategy.vue'
import StrategyTopic from '../components/StrategyTopic.vue'
import Blog from '../views/Blog.vue'
import BlogPage from '../components/BlogPage.vue'
import ASA from '../components/ASA.vue'
import Mint from '../components/Mint.vue'
import Search from '../components/Search.vue'
import Marketplace from '../components/Marketplace.vue'
import Wallet from '../components/Wallet.vue'
import Nftpage from '../components/nftpage.vue'

const routes = [
    { path: '/', name: 'Home', component: Home},
    { path: '/stories', name: 'Stories', component: Stories},
    { path: '/stories/:id', name: 'Story', component: Story},
    { path: '/strategy', name: 'Strategy', component: Strategy },
    { path: '/strategytopic/:id', name: 'StrategyTopic', component: StrategyTopic },
    { path: '/blog', name: 'Blog', component: Blog},
    { path: '/blog/:id', name: 'BlogPage', component: BlogPage},
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