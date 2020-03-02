<template functional>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid rgba(1, 1, 1, 0.5);
  border-radius: 8px;
  min-width: 20em;
  height: 25em;
  padding: 8px;
  box-shadow: 1px 1px 2px grey;
  overflow-y: scroll;
  margin-right: 8px;
  margin-bottom: 8px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}

.card::-webkit-scrollbar {
  display: none;
}
</style>