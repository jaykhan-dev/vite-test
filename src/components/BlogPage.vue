<template>
<div class="p-4 dark:bg-black dark:text-white dark:duration-300">
    <div class="mt-20">
        <h1 class="text-center lg:text-6xl text-4xl font-bold mb-8">{{item.title}}</h1>
    </div>
    <div class="grid place-items-center justify-center mb-20 items-stretch">
        <div v-html="item.intro" class="mt-2 text-center font-bold text-2xl my-8 text-green-600 items-stretch"></div>
        <div 
            v-for="block in item.content" 
            class="w-full"
            :key='block.id'>
                <div v-if="block.type == 'heading'">
                    <h2 v-html="block.value" class="text-2xl my-2"></h2>
                </div>
                <div v-else-if="block.type == 'paragraph'" class="my-2">
                    <div v-html="block.value" class=""></div>
                </div>
                <div v-else-if="block.type == 'code'" class="my-4 border border-gray-900 p-4 rounded-lg my-2">
                    <pre><code v-html="block.value.code" class=""></code></pre>
                </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'

const API_ROOT = 'https://khanquest.herokuapp.com/api/v2/pages/'

export default {
  name: 'BlogPage',
  props: {
    msg: String
  },
  data: function () {
    return { item: [] }
  },
  methods: {
      getBlogs() {
          axios
            .get(API_ROOT + this.$route.params.id + '/')
            .then((response) => (this.item = response.data))
            .catch(error => console.log(error))
      }
    },
  mounted() {
    this.getBlogs();
    },
  watch: {
        '$route' (to, from) {
          this.getBlogs();
        }
    }
}
</script>

<style>

</style>