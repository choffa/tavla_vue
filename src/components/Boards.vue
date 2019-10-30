<template>
  <div id="boards-container">
    <departure-board v-for="sp in this.stopPlaces" :key="sp.id" :stopPlace="sp"></departure-board>
  </div>
</template>

<script>

import data from '../data/mock.json'
import DepartureBoard from './DepartureBoard.vue'

export default {
  name: 'boards',
  components: {
    DepartureBoard
  },

  data() {
    return {
      stopPlaces: data.stopPlaces
    }
  },
}
</script>

<style scoped>

#boards-container {
  display: flex;
  justify-content: space-between;
}

</style>