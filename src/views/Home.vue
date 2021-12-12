<template>
  <div class="home mt-8">

    <JokeAPI />
    <Stories />
  </div>
</template>

<script>
// @ is an alias to /src
import JokeAPI from '../components/JokeAPI.vue'
import Stories from '../components/Stories.vue'

export default {
  name: 'Home',
  components: {
    JokeAPI,
    Stories
  }
}
</script>

<style>

</style>