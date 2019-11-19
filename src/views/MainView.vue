<template>
  <div class="main">
    <boards-header />
    <boards />
  </div>
</template>

<script>
// @ is an alias to /src
import Boards from '@/components/Boards.vue'
import BoardsHeader from "@/components/BoardsHeader.vue";

export default {
  name: 'main-view',
  components: {
    Boards,
    BoardsHeader,
  },
}
</script>
