<template>
<div :class="isDark ? 'dark' : ''">
  <div class="h-8 bg-sky-500 fixed top-0 w-full flex justify-between items-center p-2">
    <p class="text-center uppercase font-bold mx-4">Prototype</p>
    <button
    type="button"
      @click="isDark = !isDark"
      class="">
        <i class="fas fa-yin-yang shadow-2xl text-2xl z-100 hover:text-white duration-300"></i>

    </button>
    <div v-for="(value, key) in crypto" :key='key'><b>BITCOIN:</b>{{value}}</div>

    
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
    .get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD')
    .then(response => (this.crypto = response.data))
    .catch(error => console.log(error))
  },
}
</script>
<style>
* {
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>