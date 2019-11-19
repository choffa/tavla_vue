<template>
  <div id="header">
    <button class="btn"><font-awesome-icon icon="arrow-left" /></button>
    <span id="clock">{{ time }}</span>
    <button class="btn"><font-awesome-icon icon="cog" /></button>
  </div>
</template>

<script>
import { mixin as VueTimers } from "vue-timers";
import { ZonedDateTime, DateTimeFormatter } from "@js-joda/core";

export default {
  name: "boards-header",
  mixins: [VueTimers],
  data() {
    return {
      time: null
    };
  },
  methods: {
    updateTime() {
      this.time = ZonedDateTime.now().format(
        DateTimeFormatter.ofPattern("HH:mm")
      );
    }
  },
  timers: {
    updateTime: { time: 10000, autostart: true, repeat: true, immediate: true }
  }
};
</script>

<style scoped>
#header {
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  text-align: start;
  margin: auto;
  height: 56px;
  width: 100vw;
  line-height: 56px;
  background-color: green;
  font-size: 2rem;
  color: #000;
  box-shadow: 0px 4px 4px #888;
  /* padding: 0 8px; */
}

.btn {
  display: inline;
  font-size: inherit;
  background: none;
  border: none;
  padding: 0 16px;
}

.btn:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

#clock {
  font-size: 2.5rem;
}

</style>