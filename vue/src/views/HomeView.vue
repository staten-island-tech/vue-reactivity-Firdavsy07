<script>
import { roster } from '../array'
import { character } from '../array'
import MyCard from './MyCard.vue'
export default {
  name: 'HomeView',
  components: { MyCard },
  data() {
    return {
      models: character,
      roster: roster
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
  background-color: red;
  border: solid 1px;
  border-color: black;
  margin: 5px;
  height: 500px;
  width: 300px;
}
</style>

<template>
  <MyCard
    v-for="model in models"
    :key="model.name"
    :title="model.name"
    :threat="model.threat"
    :image1="model.dataSheetFront"
    :image2="model.dataSheetBack"
    :affiliation="model.faction"
    class="main"
  ></MyCard>
  <div class="model">
    <p>{{ roster }}</p>
  </div>
</template>
