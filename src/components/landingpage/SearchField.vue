<template>
  <div class="wrapper">
    <input class="field" type="text" v-model="search" />
    <div class="autocomplete-items" v-if="items.length > 0">
      <div class="autocomplete-item" v-for="item in items" :key="item">{{ item }}</div>
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
      search: ""
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
  }
};
</script>

<style scoped>
.wrapper {
  height: 24px;
  width: 20rem;
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
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.autocomplete-item:not(:last-child) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
</style>