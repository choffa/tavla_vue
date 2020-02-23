<template>
  <div id="boards-container">
    <departure-board v-for="stop in stopPlaces" :key="stop.id" :stopPlace="stop" />
  </div>
</template>

<script>
import DepartureBoard from "@/components/boards/DepartureBoard.vue";
import REALTIME_DATA from "@/graphql/RealtimeData.gql";

export default {
  name: "boards",
  components: {
    DepartureBoard
  },

  data() {
    return {
      stopPlaces: null
    };
  },

  apollo: {
    stopPlaces: {
      query: REALTIME_DATA,
      pollInterval: 30000,
      variables: {
        stops: [
          "NSR:StopPlace:25944",
          "NSR:StopPlace:44085",
          "NSR:StopPlace:58366",
          "NSR:StopPlace:58195"
        ]
      }
    }
  }
};
</script>

<style>
#boards-container {
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  margin: 1em;
  padding-bottom: 0.5em;
}
</style>