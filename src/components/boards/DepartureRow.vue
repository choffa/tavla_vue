<template>
  <div class="row">
    <img class="txt icon" :src="icon" alt="mode" />
    <span
      class="line txt"
      :style="lineIndicatorStyle"
    >{{ estimatedCall.serviceJourney.line.publicCode }}</span>
    <span class="destination txt">{{ estimatedCall.destinationDisplay.frontText }}</span>
    <span class="time txt">{{ departureTime }}</span>
  </div>
</template>

<script>
import { ZonedDateTime, DateTimeFormatter, Duration } from "@js-joda/core";
import { getLineColor } from "@/utils/color.util.js";
import { getIcon } from "@/utils/icon.util.js";

export default {
  props: {
    estimatedCall: {
      type: Object,
      required: true
    }
  },

  computed: {
    departureTime() {
      const format = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ssZ");
      const now = ZonedDateTime.now();
      const depTime = ZonedDateTime.parse(
        this.estimatedCall.expectedDepartureTime ||
          this.estimatedCall.aimedDepartureTime,
        format
      );
      const delta = Duration.between(now, depTime).toMinutes();
      const time = this.formatTime(delta, depTime);

      return this.estimatedCall.realtime ? time : "ca " + time;
    },
    lineIndicatorStyle() {
      const presentation = getLineColor(
        this.estimatedCall.serviceJourney.line.id,
        this.estimatedCall.serviceJourney.line.presentation
      );
      const border = !presentation.colour || presentation.colour === "FFFFFF";
      return {
        backgroundColor: "#" + presentation.colour,
        color: "#" + presentation.textColour,
        border: border ? "" : "none"
      };
    },
    icon() {
      const icons = require.context("@/assets/icons", false, /\.svg$/);
      const icon = getIcon(
        this.estimatedCall.serviceJourney.line.transportMode
      );
      return icons("./" + icon + ".svg");
    }
  },

  methods: {
    formatTime(delta, depTime) {
      if (delta < 1) {
        return "now";
      } else if (delta < 10) {
        return `${delta} min`;
      } else {
        return depTime.format(DateTimeFormatter.ofPattern("HH:mm"));
      }
    }
  }
};
</script>

<style scoped>
.row {
  display: flex;
  align-items: center;
}

.row:not(:last-child) {
  border-bottom: 1px solid rgba(1, 1, 1, 0.25);
}

.icon {
  height: 1.75rem;
}

.txt {
  margin: 0.5em 0.25em;
}

.line {
  border: 1px solid rgba(1, 1, 1, 0.5);
  min-width: 2em;
  padding: 4px;
  text-align: center;
  border-radius: 8px;
  font-weight: 600;
  display: inline-block;
}

.destination {
  margin-right: auto;
  text-align: start;
  max-width: 12em;
  display: inline-block;
}
</style>