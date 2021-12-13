<template>
  <div class="" :class="isDark ? 'dark' : ''">
   <Hero />
   <Dapps />
   <Dappcategory />
  </div>
</template>

<script>
import Hero from '../components/hero.vue'
import Dapps from '../components/dapps.vue'
import Dappcategory from '../components/dappcategory.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    Dapps,
    Dappcategory
  }  
}
</script>

<style>

</style>