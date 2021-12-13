<template>
<Slide>
  <a href="#"><span>Home</span></a>
</Slide>

<header class="lg:flex sm:grid bg-white dark:bg-black dark:text-white dark:duration-300 justify-center w-full py-8">

  <nav class="uppercase font-bold p-2 lg:w-3/4 md:w-full sm:w-full flex justify-between items-center">
      <router-link to="/" class="hover:text-green-600 duration-300">
        <div class="font-bold uppercase mx-2">
          Home
        </div>        
      </router-link>

      <input 
      type="text" 
      class="p-2 border border-gray-300 text-center rounded-full"
      placeholder="Search">

      <!--
        <router-link to="/" class="hover:text-green-600 duration-300">
        <div class="font-bold uppercase mx-2">
          Account
        </div>        
        </router-link>
      
      <div class="">        
        <router-link to="/stories" class="mx-2 hover:text-green-600 duration-300">
          <i class="fas fa-feather-alt mx-2"></i>Stories
        </router-link>
        <router-link to="/strategy" class="hover:text-green-600 duration-300">
          <i class="fas fa-chess-knight mx-2"></i>Strategy
        </router-link>
      </div>-->    
  </nav>
</header>
<router-view />
</template>

<script>
import Slide from 'vue-burger-menu'
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: false
    }
  },
    data() {
      return {
        isDark: true
      }
    },
    components: {
      Slide
    }
  }
</script>

<style>


</style>