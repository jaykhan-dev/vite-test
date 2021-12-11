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
  <div class="bg-black text-white p-4 grid place-items-center h-screen">
    <h1 class="font-bold text-4xl my-4">Telling Jokes as a passtime</h1>
    <button @click="showJoke" class="border-2 border-white p-4 rounded">Tell Joke</button>
    <div v-if="joke">
        <p class="my-8 text-2xl font-bold text-blue-600">{{joke}}</p>
    </div>
  </div>
</template>

