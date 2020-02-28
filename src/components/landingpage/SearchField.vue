<template>
  <div class="wrapper">
    <input
      class="field"
      type="text"
      v-model="search"
      @keydown.arrow-down.prevent="arrow(1)"
      @keydown.arrow-up.prevent="arrow(-1)"
    />
    <div class="autocomplete-items" v-if="items.length > 0" @mouseout="index = -1">
      <div
        class="autocomplete-item"
        v-for="(item, idx) in items"
        :class="[idx === index ? 'active' : '']"
        :key="item"
        @mouseover="index = idx"
      >{{ item }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countries: [
        "United States",
        "Norway",
        "Sweden",
        "United Kingdom",
        "Denmark",
        "Finland",
        "Germany",
        "Samoa",
        "Australia",
        "New Zealand",
        "Spain"
      ].sort(),
      search: "",
      index: -1
    };
  },
  computed: {
    items() {
      return this.search
        ? this.countries.filter(value =>
            value.toLowerCase().includes(this.search.toLowerCase())
          )
        : [];
    }
  },
  methods: {
    arrow(delta) {
      const length = this.items.length;
      const idx = this.index;
      if (this.items.length) {
        this.index = (idx + length + delta) % length;
      } else {
        this.index = -1;
      }
    }
  }
};
</script>

<style scoped>
.wrapper {
  /* height: 24px; */
  width: 20rem;
  position: relative;
}

.field,
.autocomplete-item {
  width: 100%;
  padding: 10px;
  font-size: 16px;
}

.field {
  background-color: #f1f1f1;
  border: none;
}

.autocomplete-items {
  position: absolute;
  width: 100%;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  background-color: white;
}

.autocomplete-item:not(:last-child) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.active {
  background-color: #f1f1f1;
}
</style>