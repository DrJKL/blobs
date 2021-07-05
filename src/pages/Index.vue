<template>
  <q-page class="row items-center justify-evenly">
    <game-canvas></game-canvas>
  </q-page>
</template>

<script lang="ts">
import GameCanvas from 'components/GameCanvas.vue';
import BuddiesComponent from 'components/BuddiesComponent.vue';
import { Vue, Options } from 'vue-class-component'

@Options({
  components: { GameCanvas, BuddiesComponent }
})
export default class PageIndex extends Vue {
  
  created() {
    // Do Nothing
  }
};
</script>
