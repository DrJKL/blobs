<template>
  <q-page class="row items-center justify-around ummmm">
    <game-canvas></game-canvas>
  </q-page>
</template>

<script lang="ts">
import GameCanvas from 'components/GameCanvas.vue';
import { Vue, Options } from 'vue-class-component'

@Options({
  components: { GameCanvas }
})
export default class PageIndex extends Vue {
  
};
</script>

<style lang="scss" scoped>
.ummmm {
  grid-column: 1;
  grid-row: 1;
}
</style>