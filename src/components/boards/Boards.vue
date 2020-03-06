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
    BikeBoard
  },

  props: {
    stopPlaceIds: {
      type: Array[String],
      default: () => [
        "NSR:StopPlace:25944",
        "NSR:StopPlace:60257",
        "NSR:StopPlace:58366",
        "NSR:StopPlace:58545"
      ]
    },
    bikeRentalStationIds: {
      type: Array[String],
      default: () => ["1101", "3", "4"]
    }
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
      variables() {
        return { stops: this.stopPlaceIds };
      },
      skip() {
        return !this.stopPlaceIds.length;
      }
    },
    bikeRentalStations: {
      query: CITYBIKE_DATA,
      pollInterval: 2 * 60 * 1000,
      variables() {
        return { stations: this.bikeRentalStationIds };
      },
      skip() {
        return !this.bikeRentalStationIds.length;
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