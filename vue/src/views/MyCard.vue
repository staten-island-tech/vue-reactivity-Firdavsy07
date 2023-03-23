<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <p>Threat is {{ threat }}</p>
    <p>{{ affiliation }}</p>
    <img src="{{ image1 }}" />
    <img src="{{ image2 }}" />
  </div>
</template>

<style></style>

<script>
export default {
  name: 'MyCard',
  props: {
    title: String,
    threat: Number,
    image1: String,
    image2: String,
    affiliation: String
  }
}
</script>
