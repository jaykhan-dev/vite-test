<template>
    <div class="">
        <h1 class="font-bold text-4xl my-4 text-center">Strategic Thinking</h1>
    </div>
    
    
    <div class="flex justify-center">
        
          <div class="lg:w-3/4 grid lg:grid-cols-4 grid-cols-1 gap-2 p-4">
            <div 
            v-for="item in strategies" 
            class="p-4 hover:text-blue-800 duration-300"
            :key='item.id'>
              <router-link :to="/strategytopic/+ item.id"
              class="">
                
                <h2 class="text-xl font-bold border-2 border-gray-900 dark:border-gray-800 text-center p-4 rounded">
                    {{ item.title }}
                </h2>                
                                  
              </router-link>
          </div>

          <router-view></router-view> 
        </div> 
  </div>
</template>

<script>
import axios from 'axios'

const API_ROOT = 'https://jaykhan.live/api/v2/pages/'

export default {
  name: 'Strategies',
  props: {
    msg: String
  },
  data: function () {
    return { strategies: [] }
  },
  mounted() {
    axios
    .get(API_ROOT + '?type=strategies.StrategyPage&fields=title,strategy,tactics_stream')
    .then(response => (this.strategies = response.data.items))
  }
}
</script>