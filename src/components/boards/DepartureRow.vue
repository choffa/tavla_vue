<template>
  <div class="row">
    <img class="txt icon" :src="icon" alt="mode" />
    <span
      class="line icon txt"
      :style="lineIndicatorStyle"
    >{{ estimatedCall.serviceJourney.line.publicCode }}</span>
    <span class="destination txt">{{ estimatedCall.destinationDisplay.frontText }}</span>
    <span class="time txt">{{ departureTime() }}</span>
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
    },
    now: {
      type: Object,
      required: true
    }
  },

  computed: {
    lineIndicatorStyle() {
      const presentation = getLineColor(
        this.estimatedCall.serviceJourney.line.id,
        this.estimatedCall.serviceJourney.line.presentation
      );
      const border =
        !presentation.colour || presentation.colour.toLowerCase() === "ffffff";
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
    },
    departureTime() {
      const format = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ssZ");
      const depTime = ZonedDateTime.parse(
        this.estimatedCall.expectedDepartureTime ||
          this.estimatedCall.aimedDepartureTime,
        format
      );
      const delta = Duration.between(this.now, depTime).toMinutes();
      const time = this.formatTime(delta, depTime);

      return this.estimatedCall.realtime ? time : "ca " + time;
    }
  }
};
</script>

<style scoped>
.line {
  border: 1px solid rgba(1, 1, 1, 0.5);
  min-width: calc(1.4rem + (2 * 6px));
  padding: 0 0.375rem;
  border-radius: 0.375rem;
  font-weight: 600;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.destination {
  margin-right: auto;
  text-align: left;
  max-width: 12em;
  display: inline-block;
}
</style>