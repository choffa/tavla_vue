<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <boards></boards>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import DepartureBoard from './components/DepartureBoard.vue'
import Boards from './components/Boards.vue'

export default {
  name: 'app',
  components: {
    Boards
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

</style>
