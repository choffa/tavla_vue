<template>
  <card>
    <div class="header">Bysykkel</div>
    <div class="bike-station row" v-for="station in bikeStations" :key="station.id">
      <img src="@/assets/icons/bike-city.svg" alt="citybike" class="icon txt" />
      <span class="station-name txt">{{ station.name }}</span>
      <img src="@/assets/icons/bike-circle.svg" alt="Bikes" title="Bikes" class="icon txt" />
      <span class="station-data txt">{{ station.bikesAvailable }} - {{ station.spacesAvailable }}</span>
      <img
        src="@/assets/icons/bike-parking-circle.svg"
        alt="Parking"
        title="Parking"
        class="icon txt"
      />
    </div>
  </card>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  components: {
    Card
  },
  props: {
    bikeStations: {
      type: Array[Object],
      required: true
    }
  }
};
</script>

<style>
.station-name {
  margin-right: auto;
}

.station-data {
  min-width: 3em;
}
</style>