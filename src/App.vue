<script setup>
import Footer from './components/footer.vue'
</script>

<template>
<div class="flex justify-center">
  
  <div id="nav" class="uppercase font-bold p-2 fixed top-0 lg:w-3/4 md:w-full sm:w-full flex justify-between">
      <router-link to="/" class="m-4 hover:text-green-600 duration-300">
        <div class="text-2xl">
          <i class="fas fa-dragon"></i>
        </div>
      </router-link>
      <div class="p-2">
        
        <router-link to="/stories" class="m-4 hover:text-green-600 duration-300">Stories</router-link>
        <router-link to="/strategy" class="m-4 hover:text-green-600 duration-300">Strategy</router-link>
      </div>
      
  </div>
</div>
  
  <router-view />
  <Footer />
</template>

<style>
  /*
  body {
    
    background-color: azure;
    background-image: url('https://images.unsplash.com/photo-1630326867210-bf4b2cdd2019?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: fixed;
       
  }
  */
</style>