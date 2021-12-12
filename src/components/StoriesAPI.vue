<template>
  <div class="p-4">
    <h1 class="font-bold text-4xl my-4">Stories API</h1>
    
    <div v-if="item">
        <div class="my-8 text-2xl font-bold text-blue-600">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Stories',
  props: {
    msg: String
  },
  data() {
    return {
      item: []
    }
  },
  methods: {
    async getStories() {
      axios
      .get('https://jaykhan.live/api/v2/?type=stories.StoryPage&fields=genre,blurb,content,author,story_image_thumbnail')
      .then((response) => (this.item = response.data))
    }
  }
}
</script>