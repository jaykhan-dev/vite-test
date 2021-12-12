<template>
  <div class="strategy dark:bg-black dark:text-white mt-8">
    <Strategies />
    <Todo />
  </div>
</template>

<script>
import Todo from '../components/todo.vue'
import Strategies from '../components/StrategiesAPI.vue'

export default {
  name: 'Strategy',
  components: {
    Todo,
    Strategies
  }
}
</script>

<style>

</style>