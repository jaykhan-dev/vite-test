<template>
<header class="flex bg-white dark:bg-black dark:text-white dark:duration-300 justify-center w-full fixed top-0">

  <nav class="uppercase font-bold p-2 lg:w-3/4 md:w-full sm:w-full flex justify-between">
      <router-link to="/" class="hover:text-green-600 duration-300">
        <div class="font-bold uppercase">
          Home
        </div>
      </router-link>
      <div class="">        
        <router-link to="/stories" class="mx-2 hover:text-green-600 duration-300">Stories</router-link>
        <router-link to="/strategy" class="hover:text-green-600 duration-300">Strategy</router-link>
      </div>      
  </nav>
</header>
<router-view />
</template>

<script>
export default {
    data() {
      return {
        isDark: true
      }
    }
  }
</script>

<style>


</style>