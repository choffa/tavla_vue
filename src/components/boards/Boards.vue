<template>
  <div id="boards-container">
    <departure-board v-for="stop in stopPlaces" :key="stop.id" :stopPlace="stop" />
    <bike-board v-if="!!bikeRentalStations" :bikeStations="bikeRentalStations" />
  </div>
</template>

<script>
import DepartureBoard from "./DepartureBoard.vue";
import BikeBoard from "./BikeBoard.vue";
import REALTIME_DATA from "@/graphql/RealtimeData.gql";
import CITYBIKE_DATA from "@/graphql/CityBikeData.gql";

export default {
  name: "boards",
  components: {
    DepartureBoard,
    BikeBoard // eslint-disable-line
  },

  data() {
    return {
      stopPlaces: null,
      bikeRentalStations: null
    };
  },

  apollo: {
    stopPlaces: {
      query: REALTIME_DATA,
      pollInterval: 30 * 1000,
      variables: {
        stops: [
          "NSR:StopPlace:25944",
          "NSR:StopPlace:60257",
          "NSR:StopPlace:58366",
          "NSR:StopPlace:58545"
        ]
      }
    },
    bikeRentalStations: {
      query: CITYBIKE_DATA,
      pollInterval: 2 * 60 * 1000,
      variables: {
        stations: ["1101", "3", "4"]
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