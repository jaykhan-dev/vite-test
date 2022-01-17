<template>
<div :class="isDark ? 'dark' : ''">
  <div class="z-50 bg-blue-600 text-white duration-300 fixed top-0 w-full lg:flex justify-evenly items-center p-2">
    <div class="flex items-center">      
        <div v-for="(value, key) in crypto" :key='key' class="p-2 font-bold"><b>ALGO:</b>{{value}}</div>
        <router-link to="/asa">
          <p class="text-center uppercase font-bold mx-4 hover:text-black duration-300">Assets</p>
        </router-link>
        <router-link to="/marketplace">
          <p class="text-center uppercase font-bold mx-4 hover:text-black duration-300">Marketplace</p>
        </router-link>        
    </div>

    <div class="flex">

      <router-link to="/" class="hover:text-black duration-300 p-2">
          <i class="fas fa-home shadow-2xl text-2xl z-100 hover:text-blue-900 duration-300"></i>       
      </router-link>

      <button
      type="button"
        @click="isDark = !isDark"
        class="p-2">
          <i class="fas fa-moon shadow-2xl text-2xl z-100 hover:text-blue-900 duration-300 dark:hidden block"></i>
          <i class="fas fa-sun shadow-2xl text-2xl z-100 hover:text-blue-900 duration-300 dark:block hidden"></i>
      </button>

      <router-link to="/search">
        <div class="p-2"><i class="fas fa-search text-2xl"></i></div>
      </router-link>

      <router-link to="/wallet">
        <div class=""><i class="far fa-user-circle dark:text-white text-2xl m-2"></i></div>
      </router-link>     
      
    </div>
  </div>

  <Navigation />
  <Footer />
  
</div>
  
</template>

<script>
import axios from 'axios'
import Navigation from './components/Navigation.vue'
import Footer from './components/footer.vue'

export default {
  name: 'app',
  components: {
    Navigation,
    Footer
  },
  data () {
    return {
      isDark: true,
      crypto: [],
    }
  },
  mounted() {
    axios
    .get('https://min-api.cryptocompare.com/data/price?fsym=ALGO&tsyms=USD')
    .then(response => (this.crypto = response.data))
    .catch(error => console.log(error))
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@500&family=Questrial&display=swap');
h1 {
  font-family: 'Questrial', sans-serif;
}
p {
font-family: 'Jost', sans-serif;
}

</style>