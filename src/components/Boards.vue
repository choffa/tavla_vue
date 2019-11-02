<template>
  <div id="boards-container">
    <departure-board v-for="sp in this.stopPlaces" :key="sp.id" :stopPlace="sp"></departure-board>
  </div>
</template>

<script>

import mock from '../data/mock.json'
import DepartureBoard from './DepartureBoard.vue'

export default {
  name: 'boards',
  components: {
    DepartureBoard
  },

  data() {
    return {
      stopPlaces: mock.data.stopPlaces
    }
  },
}
</script>

<style>

#boards-container {
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  margin: 1em;
  color: red;
}

</style>