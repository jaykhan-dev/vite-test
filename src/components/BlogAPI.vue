<template>

<div class="p-4 dark:bg-black dark:text-white dark:duration-300">
    <div class="">
        <h1 class="font-bold text-4xl my-4 text-center">Blog</h1>
    </div>  
    
    <div class="flex justify-center">
        
        <div class="lg:w-3/4 grid lg:grid-cols-3 grid-cols-1 gap-2 p-4">
            <div 
            v-for="item in blogs" 
            class="p-4 hover:text-blue-800 duration-300"
            :key='item.id'>
              <router-link :to="/blog/+ item.id">
                <div class="border-2 border-gray-700 rounded-lg p-4">
                  <h2 class="text-xl font-bold text-sky-500">
                      {{ item.title }}
                  </h2>
                  <p>
                    {{item.intro}}
                  </p>
                </div>
                              
                                  
              </router-link>
            </div>

          <router-view></router-view> 
        </div> 
    </div>
</div>
  
</template>

<script>
import axios from 'axios'

const API_ROOT = 'https://jaykhan.live/api/v2/pages/'

export default {
  name: 'Blog',
  props: {
    msg: String
  },
  data: function () {
    return { blogs: [] }
  },
  mounted() {
    axios
    .get(API_ROOT + '?type=blog.BlogPage&fields=title,intro,tags,content')
    .then(response => (this.blogs = response.data.items))
  }
}
</script>

<style>

</style>