<template>
<div :class="isDark ? 'dark' : ''">
  <div class="h-8 bg-sky-500 fixed top-0 w-full flex justify-center items-center">
    <p class="text-center uppercase font-bold mx-4">Prototype</p>
    <button
    type="button"
      @click="isDark = !isDark"
      class="">
        <i class="fas fa-yin-yang shadow-2xl text-2xl z-100 hover:text-white duration-300"></i>

    </button>
  </div>
 
  <Navigation />
  <Footer />
</div>
  
</template>

<script>
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
      isDark: true
    }
  },
}
</script>
<style>
* {
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>