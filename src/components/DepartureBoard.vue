<template>
<div id="container">
  <table>
    <tr class="station-header">
      <th><font-awesome-icon icon="bus" /></th>
      <th>{{ stopPlace.name }}</th>
    </tr>
    <tr v-for="(call, idx) in stopPlace.estimatedCalls" :key="idx">
      <td>{{ getTime(call) }}</td>
      <td>{{ call.destinationDisplay.frontText }}</td>
    </tr>
  </table>
</div>
</template>

<script>
import { ZonedDateTime, DateTimeFormatter } from '@js-joda/core';

function getTime(call) {
  const format = DateTimeFormatter.ofPattern(
    "yyyy-MM-dd'T'HH:mm:ssZ"
  );
  const time = ZonedDateTime.parse(
    call.actualDepartureTime ||
    call.expectedDepartureTime ||
    call.aimedDepartureTime,
    format
  );
  return time.format(DateTimeFormatter.ofPattern('HH:mm'));
}

export default {
  props: {
    stopPlace: {
      type: Object,
      required: true
    },
  },
  methods: {
    getTime: getTime,
  },
}
</script>

<style scoped>

#container {
  background: rgb(12, 100, 12);
  max-width: 20em;
  max-height: 25em;
  color: floralwhite;
  padding: 0.75em;
  text-align: start;
}

table {
  padding: 0em 0em 0.5em 0em;
}

.station-header th {
  font-size: 1.75rem;
  font-weight: 300;
  padding: 0em 0em 0.5em 0em;
}

</style>