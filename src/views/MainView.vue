<template>
  <div class="main">
    <!-- <boards-header /> -->
    <boards :stopPlaceIds="stopPlaceIds" :bikeRentalStationIds="bikeRentalStationIds" />
  </div>
</template>

<script>
// @ is an alias to /src
import Boards from "@/components/boards/Boards.vue";
// import BoardsHeader from "@/components/BoardsHeader.vue";
import NEAREST from "@/graphql/Nearest.gql";

export default {
  components: {
    Boards
  },
  props: {
    geometry: Object
  },

  data() {
    return {
      stopPlaceIds: [],
      bikeRentalStationIds: []
    };
  },

  apollo: {
    nearest: {
      query: NEAREST,
      variables() {
        return {
          lon: this.geometry.coordinates[0],
          lat: this.geometry.coordinates[1],
          max: 500
        };
      },
      manual: true,
      result({ data }) {
        this.stopPlaceIds = data.nearest.edges.reduce((acc, cur) => {
          if (cur.node.place.__typename == "StopPlace") {
            acc.push(cur.node.place.id);
          }
          return acc;
        }, []);
        this.bikeRentalStationIds = data.nearest.edges.reduce((acc, cur) => {
          if (cur.node.place.__typename == "BikeRentalStation") {
            acc.push(cur.node.place.id);
          }
          return acc;
        }, []);
      },
      skip() {
        return !this.geometry;
      }
    }
  }
};
</script>
