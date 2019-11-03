<template>
<div id="container">
  <table>
    <tr class="station-header">
      <!-- <th><font-awesome-icon icon="bus" /></th> -->
      <th class="stop-place" colspan="3">{{ stopPlace.name }}</th>
    </tr>
    <tr v-for="(call, idx) in stopPlace.estimatedCalls" :key="idx">
      <td>{{ call.serviceJourney.journeyPattern.line.publicCode }}</td>
      <td>{{ call.destinationDisplay.frontText }}</td>
      <td>{{ getTime(call) }}</td>
    </tr>
  </table>
</div>
</template>

<script>
import { ZonedDateTime, DateTimeFormatter, Duration } from '@js-joda/core';

export default {
  props: {
    stopPlace: {
      type: Object,
      required: true
    },
  },
  methods: {
    getTime(call) {
      const format = DateTimeFormatter.ofPattern(
        "yyyy-MM-dd'T'HH:mm:ssZ"
      );
      const now = ZonedDateTime.now();
      const time = ZonedDateTime.parse(
        call.actualDepartureTime ||
        call.expectedDepartureTime ||
        call.aimedDepartureTime,
        format
      );
      const delta = Duration.between(now, time).toMinutes();
      
      if (delta < 1) {
        return "now";
      } else if (delta <= 10) {
        return `${delta} min`;
      } else {
        return time.format(DateTimeFormatter.ofPattern('HH:mm'));
      }
    },
  },
}
</script>

<style scoped>

#container {
  background: rgb(12, 100, 12);
  color: floralwhite;
  padding: 0.75em;
  margin-right: 1em;
  margin-bottom: 1em;
  text-align: start;
}

table {
  padding: 0em 0em 0.5em 0em;
  white-space: nowrap;
}

td {
  padding: 0.25em;
}

.station-header th {
  font-size: 1.75rem;
  font-weight: 300;
  padding: 0em 0em 0.5em 0em;
}

</style>