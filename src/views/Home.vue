<template>
  <div class="" :class="isDark ? 'dark' : ''">
    <JokeAPI />    
  </div>
</template>

<script>
// @ is an alias to /src
import JokeAPI from '../components/JokeAPI.vue'

export default {
  name: 'Home',
  components: {
    JokeAPI,
  }  
}
</script>

<style>

</style>