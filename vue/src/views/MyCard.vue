<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <p>Threat is {{ threat }}</p>
    <p>{{ affiliation }}</p>
    <img class="image" :src="getImage1" />
    <img class="image" :src="getImage2" />
    <button v-on:click="Selection" @click="Acquire" v-if="Selected">Chosen</button>
    <button v-on:click="Selection" v-else>Not Included</button>
  </div>
</template>

<style>
.image {
  max-width: 200px;
  max-height: 200px;
}
</style>

<script>
import { character } from '../array'
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
    affiliation: Array
  },
  methods: {
    Acquire: function (id) {
      const find = character.find((character) => character.id === id)
      roster.push(find)
      console.log(roster)
    },
    Selection: function () {
      if (this.Selected === false) {
        this.Selected = true
      } else {
        this.Selected = false
      }
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
