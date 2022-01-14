<template>
<div :class="isDark ? 'dark' : ''">
  <div class="dark:bg-black bg-white dark:text-white duration-300 fixed bottom-0 w-full flex justify-evenly items-center p-2">
    <div class="flex items-center">
      <router-link to="/asa">
        <p class="text-center uppercase font-bold mx-4">MINT PROTOTYPE</p>
      </router-link>
      
      <button
      type="button"
        @click="isDark = !isDark"
        class="p-2">
          <i class="fas fa-yin-yang shadow-2xl text-2xl z-100 hover:text-white duration-300"></i>
      </button>
      <div v-for="(value, key) in crypto" :key='key' class="p-2"><b>ALGO:</b>{{value}}</div>
      <div class="p-2">
        <i class="fas fa-search text-2xl"></i>
      </div>
      <router-link to="/" class="hover:text-green-600 duration-300">
          <div class="font-bold uppercase mx-2">
            Home
          </div>        
        </router-link>
    </div>
    
    <Footer />
  </div>

  <Navigation />
  
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