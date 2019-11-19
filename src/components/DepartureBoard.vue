<template>
  <div id="container">
    <table>
      <thead>
        <tr class="station-header">
          <!-- <th><font-awesome-icon icon="bus" /></th> -->
          <th class="stop-place" colspan="3">{{ stopPlace.name }}</th>
        </tr>
      </thead>
      <transition-group name="table" tag="tbody">
        <tr v-for="call in stopPlace.estimatedCalls" :key="call.serviceJourney.id" class="call-row">
          <td>{{ call.serviceJourney.journeyPattern.line.publicCode }}</td>
          <td>
            <div class="front-text">{{ call.destinationDisplay.frontText }}</div>
          </td>
          <td>{{ getTime(call) }}</td>
        </tr>
      </transition-group>
    </table>
  </div>
</template>

<script>
import { ZonedDateTime, DateTimeFormatter, Duration } from "@js-joda/core";

export default {
  props: {
    stopPlace: {
      type: Object,
      required: true
    }
  },
  methods: {
    getTime(call) {
      const format = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ssZ");
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
      } else if (delta < 10) {
        return `${delta} min`;
      } else {
        return time.format(DateTimeFormatter.ofPattern("HH:mm"));
      }
    }
  }
};
</script>

<style scoped>
#container {
  background: rgb(12, 100, 12);
  color: floralwhite;
  padding: 0.75em;
  margin-right: 1em;
  margin-bottom: 1em;
  text-align: start;
  box-shadow: 2px 4px 4px #888;
  max-width: 100%;
  height: 22em;
  max-height: 22em;
  width: auto;
  overflow: hidden;
}

table {
  white-space: nowrap;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
  table-layout: fixed;
}

.call-row,
.front-text,
td {
  padding: 0.25em;
  height: 1em;
  max-height: 1em;
  font-size: 1em;
}

th {
  font-size: 1.75rem;
  font-weight: 200;
  padding: 0em 0em 0.5em 0em;
}

.table-leave-active {
  transition: opacity 1s ease, transform 1s ease-in;
  transition-delay: 0.5s;
}

.table-move {
  transition: transform 0.5s;
}

.table-leave-to {
  opacity: 0;
  transform: translateX(5em);
}
</style>