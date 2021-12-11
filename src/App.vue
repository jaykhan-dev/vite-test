<script setup>
import Footer from './components/footer.vue'
</script>

<template>
  <div id="nav" class="bg-blue-600 text-white font-bold p-4 fixed top-0 w-full">
    <router-link to="/" class="m-4 hover:text-green-600 duration-300">Home</router-link>
    <router-link to="/about" class="m-4 hover:text-green-600 duration-300">About</router-link>
  </div>
  <router-view />
  <Footer />
</template>

