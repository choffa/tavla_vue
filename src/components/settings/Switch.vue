<template>
  <label class="switch">
    <input type="checkbox" :checked="checked" @change="$emit('change', $event.target.checked)" />
    <span class="slider"></span>
  </label>
</template>

<script>
export default {
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    checked: Boolean
  }
};
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 38px;
  height: 24px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 34px;
  background-color: #ccc;
  transition: 0.4s;
}

.slider::before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 2px;
  bottom: 2px;
  border-radius: 50%;
  background-color: #fafafa;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: green;
}

input:checked + .slider::before {
  transform: translateX(14px);
}
</style>