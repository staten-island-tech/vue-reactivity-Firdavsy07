<script>
import { character } from '../array'
export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      models: character
    }
  },
  methods: {
    test() {
      console.log(this.models)
    }
  }
}
</script>

<style scoped>
.main {
}
</style>

<template>
  <div class="main">
    <h1 v-for="model in models" :key="model">{{ model }}</h1>
  </div>
</template>
