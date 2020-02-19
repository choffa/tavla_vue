<template>
  <card>
    <div class="header txt">{{ stopPlace.name }}</div>
    <departure-row
      v-for="call in stopPlace.estimatedCalls"
      :key="call.serviceJourney.id"
      :estimatedCall="call"
    />
  </card>
</template>

<script>
import Card from "./Card.vue";
import DepartureRow from "./DepartureRow.vue";

export default {
  components: {
    Card,
    DepartureRow
  },
  props: {
    stopPlace: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.header {
  text-align: center;
  font-size: larger;
  line-height: 24px;
  margin: 0.5em 0.25em;
}
</style>