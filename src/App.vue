<script setup>
import Footer from './components/footer.vue'
</script>

<template>
<div class="flex justify-center bg-black w-full z-8 text-white fixed top-0">
  
  <div id="nav" class="uppercase bg-black font-bold p-2 lg:w-3/4 md:w-full sm:w-full flex justify-between">
      <router-link to="/" class="hover:text-green-600 duration-300">
        <div class="font-bold uppercase">
          Melange Apps
        </div>
      </router-link>
      <div class="">
        
        <router-link to="/stories" class="m-4 hover:text-green-600 duration-300">Stories</router-link>
        <router-link to="/strategy" class="m-4 hover:text-green-600 duration-300">Strategy</router-link>
      </div>
      
  </div>
</div>
  
  <router-view />
  <Footer />
</template>

<style>

</style>