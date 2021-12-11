<template>
  <div class="home mt-8">

    <HelloWorld />
    <Stories />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'
import Stories from '../components/Stories.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Stories
  }
}
</script>