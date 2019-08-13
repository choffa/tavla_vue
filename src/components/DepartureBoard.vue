<template>
<div id="container">
  <div id="station-header">
    <font-awesome-icon icon="bus" /><span class="station-name">Røyneberg</span>
  </div>
  <div class="departure" v-for="n in 4" v-bind:key="n">
    <span class="time">14:00</span><span class="destination">Stavanger</span>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

#container {
  background: rgb(12, 100, 12);
  width: 20em;
  height: 20em;
  max-width: 20em;
  max-height: 20em;
  color: floralwhite;
  padding: 0.75em;
  text-align: start;
}

#station-header {
  font-size: 2rem;
  font-weight: 300;
  margin: 0em 0em 0.5em 0em;
}

.station-name, .destination {
  margin-left: 0.8em;
}

.departure {
  margin-bottom: 0.8em;
}

</style>