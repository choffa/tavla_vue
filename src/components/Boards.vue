<template>
  <div id="boards-container">
    <departure-board v-for="sp in this.stopPlaces" :key="sp.id" :stopPlace="sp"></departure-board>
  </div>
</template>

<script>

import DepartureBoard from './DepartureBoard.vue'
import { GET_REALTIME_DATA } from "@/graphql/queries"

export default {
  name: 'boards',
  components: {
    DepartureBoard
  },

  data() {
    return {
      stopPlaces: null,
    }
  },

  apollo: {
    stopPlaces: {
      query: GET_REALTIME_DATA,
      pollInterval: 30000,
    },
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