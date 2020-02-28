<template>
  <div class="main">
    <h2>Sanntidstavla du kan tilpasse dine egne behov</h2>
    <div class="search-container">
      <search-field class="search" />
      <button class="btn" @click="navigate">Opprett tavle</button>
    </div>
    <div class="content">
      <p>For å opprette en tavle trenger appen å vite hvilket område du er interessert i. Lokasjonen din lagres aldri.</p>
      <p>
        Denne appen er inspirert av
        <a href="https://tavla.entur.no">tavla</a> fra
        <a href="http://developer.entur.org">entur</a>.
      </p>
    </div>
    <img class="illustration" src="@/assets/bus-stop.svg" alt="illustration" />
  </div>
</template>

<script>
import SearchField from "@/components/landingpage/SearchField.vue";

export default {
  components: {
    SearchField
  },
  methods: {
    navigate() {
      this.$router.push("boards");
    }
  }
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}

.search-container {
  height: fit-content;
  display: flex;
  margin-top: 2em;
  margin-bottom: 2em;
}

.btn {
  margin: 0 1em;
  padding: 0 1em;
  cursor: pointer;
  border: none;
  background-color: #407bff;
  color: white;
  font-size: 18px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.illustration {
  /* position: absolute;
  bottom: 0; */
  height: 600px;
}

.content {
  flex-grow: 1;
}
</style>