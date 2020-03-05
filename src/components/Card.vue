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

<style>
.header {
  text-align: center;
  font-size: larger;
  line-height: 24px;
  margin: 0.5em 0.25em;
}

.row {
  display: flex;
  align-items: center;
}

.row:not(:last-child) {
  border-bottom: 1px solid rgba(1, 1, 1, 0.25);
}

.txt {
  margin: 0.5rem 0.25rem;
  line-height: 1.75em;
}

.icon {
  height: 1.75rem;
}
</style>