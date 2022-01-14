<template>
  <div class="" :class="isDark ? 'dark' : ''">
   <Hero />
   <Featured />
   <Dappcategory />
   <Smartontract />
  </div>
</template>

<script>
import Hero from '../components/hero.vue'
import Dapps from '../components/dapps.vue'
import Dappcategory from '../components/dappcategory.vue'
import Smartontract from '../components/smartcontracts.vue'
import Featured from '../components/Featured.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    Dapps,
    Dappcategory,
    Smartontract,
    Featured,
  }  
}
</script>

<style>

</style>