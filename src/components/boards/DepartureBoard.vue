<template>
  <card>
    <div class="header">{{ stopPlace.name }}</div>
    <departure-row
      v-for="call in stopPlace.estimatedCalls"
      :key="call.serviceJourney.id"
      :estimatedCall="call"
      :now="now"
    />
  </card>
</template>

<script>
import Card from "@/components/Card.vue";
import DepartureRow from "./DepartureRow.vue";
import { NowMixin } from "@/mixins.js";

export default {
  mixins: [NowMixin],
  components: {
    Card,
    DepartureRow
  },
  props: {
    stopPlace: {
      type: Object,
      required: true
    }
  },
  now: {
    interval: 1000 * 10
  }
};
</script>
