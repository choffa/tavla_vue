<template>
  <div
    class="wrapper"
    @keydown.arrow-down="active++"
    @keydown.arrow-up="active--"
    @keypress.enter="emitSelect(items[active])"
  >
    <input
      type="text"
      class="field"
      :value="text"
      :placeholder="placeholder"
      @input="emitSearch"
      @focus="show = true"
    />
    <div class="autocomplete-items" v-if="show" @mouseleave="active = -1">
      <div
        class="autocomplete-item"
        v-for="(item, idx) in items"
        :key="idx"
        :class="{ 'active-item': active === idx }"
        @mouseenter="active = idx"
        @click="emitSelect(item)"
        @keypress.enter="emitSelect(item)"
      >{{ item.label }}</div>
    </div>
  </div>
</template>

<script>
import { debounce } from "lodash";

export default {
  props: {
    items: {
      type: Array,
      default: () => [
        { label: "Norway" },
        { label: "Sweden" },
        { label: "Denmark" },
        { label: "Island" },
        { label: "Finland" },
        { label: "Estonia" }
      ]
    },
    delay: {
      type: Number,
      default: () => 500
    },
    placeholder: {
      type: String,
      default: () => "Adresse eller sted"
    }
  },

  data() {
    return {
      text: "",
      active: -1,
      show: false
    };
  },

  created() {
    const vm = this;
    this.emitSearch = debounce(function(e) {
      vm.text = e.target.value;
      vm.$emit("input", vm.text);
    }, vm.delay);
  },

  methods: {
    emitSelect(item) {
      this.text = item.label;
      this.show = false;
      this.$emit("select", item);
    }
  }
};
</script>

<style>
.wrapper {
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
  background-color: white;
  cursor: pointer;
  user-select: none;
}

.autocomplete-item:not(:last-child) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.active-item {
  background-color: #f1f1f1;
}
</style>