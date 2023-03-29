<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <p>Threat is {{ threat }}</p>
    <p>{{ affiliation }}</p>
    <img class="image" :src="getImage1" />
    <img class="image" :src="getImage2" />
  </div>
</template>

<style>
.image {
  max-width: 200px;
  max-height: 200px;
}
</style>

<script>
export default {
  name: 'MyCard',
  props: {
    title: String,
    threat: Number,
    image1: String,
    image2: String,
    affiliation: Array
  },
  computed: {
    getImage1: function () {
      return this.image1
    },
    getImage2: function () {
      return this.image2
    }
  }
}
</script>
