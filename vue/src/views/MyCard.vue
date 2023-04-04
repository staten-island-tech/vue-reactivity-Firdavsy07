<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <p>Threat is {{ threat }}</p>
    <p>{{ affiliation }}</p>
    <img class="image" :src="getImage1" />
    <img class="image" :src="getImage2" />
    <button v-on:click="Selection" @click="Remove()" v-if="Selected">Chosen</button>
    <button v-on:click="Selection" @click="Acquire()" v-else>Not Included</button>
  </div>
</template>

<style>
.image {
  max-width: 200px;
  max-height: 200px;
}
</style>

<script>
import { roster } from '../array'
export default {
  name: 'MyCard',
  data() {
    return {
      Selected: false
    }
  },
  props: {
    title: String,
    threat: Number,
    image1: String,
    image2: String,
    affiliation: Array,
    id: Number,
    display: String
  },
  methods: {
    Acquire: function () {
      roster.push({
        name: this.title,
        cost: this.threat
      })
      console.log(roster)
    }
  },
  Remove: function () {
    let remove = roster.indexOf(roster.find((roster) => roster.name === this.title))
    console.log(remove)
    roster.splice(remove, 1)
    console.log(roster)
  },
  Selection: function () {
    if (this.Selected === false) {
      this.Selected = true
    } else {
      this.Selected = false
    }
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
