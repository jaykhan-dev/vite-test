<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      joke: ''
    }
  },
  methods: {
    async showJoke() {
      let config = {
        headers: {
            'Accept': 'application/json'
        }
      }
      const joke = await axios.get('https://icanhazdadjoke.com',config);
      this.joke = joke.data.joke
    }
  }
}
</script>

<template>
<div class="flex justify-center">
  <div class="p-4 lg:w-3/4 md:w-full sm:w-full">
    <h1 class="font-bold text-4xl my-4">Lame Dad Jokes</h1>
    <button @click="showJoke" class="border-2 border-black p-4 rounded hover:bg-green-600 duration-300">Tell Joke</button>
    <div v-if="joke">
        <p class="my-8 text-2xl font-bold">{{joke}}</p>
    </div>
  </div>
</div>
  
</template>

