<template>
  <ul>
    <li v-for="model in models" :key="model">{{ model }}</li>
  </ul>
</template>

<script>
export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      student: 'Harry',
      graduated: false,
      models: ['Stormsurge', 'Knight Galant', 'Stompa']
    }
  }
}
</script>

<style></style>
