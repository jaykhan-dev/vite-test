<template>
<div class="grid place-items-center p-4 dark:bg-black dark:text-white dark:duration-300 ">
    <div class="mt-20">
        <h1 class="text-center text-6xl font-bold mb-20">{{item.title}}</h1>
    </div>
    <div class="grid place-items-center justify-center mb-20 lg:w-3/4">
        <div v-html="item.strategy" class="mt-2 w-1/2 font-bold text-4xl my-8 text-green-600"></div>
        <div 
            v-for="block in item.tactics_stream" 
            class="lg:w-1/2 md:w-full sm:w-full"
            :key='block.id'>
                <div v-if="block.type == 'tactic'">
                    <h2 v-html="block.value" class="text-2xl"></h2>
                </div>
                <div v-else-if="block.type == 'annotations'" class="">
                    <div v-html="block.value" class=""></div>
                </div>
                                                    
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'

const API_ROOT = 'https://jaykhan.live/api/v2/pages/'

export default {
  name: 'Strategy',
  props: {
    msg: String
  },
  data: function () {
    return { item: [] }
  },
  methods: {
      getStrategies() {
          axios
            .get(API_ROOT + this.$route.params.id + '/')
            .then((response) => (this.item = response.data))
      }
    },
  mounted() {
    this.getStrategies();
    },
  watch: {
        '$route' (to, from) {
          this.getStrategies();
        }
    }

}
</script>