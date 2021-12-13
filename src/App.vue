<template>
<div :class="isDark ? 'dark' : ''">
  <button
    type="button"
      @click="isDark = !isDark"
      class="fixed bottom-2 left-2 w-8 z-10">
        <i class="fas fa-adjust text-sky-500 shadow-2xl text-4xl z-100 hover:text-sky-500 duration-300"></i>
    </button>
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