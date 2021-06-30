<template>
  <q-page class="row items-center justify-evenly">
    <game-canvas></game-canvas>
    <buddies-component></buddies-component>
  </q-page>
</template>

<script lang="ts">
import ExampleComponent from 'components/ClassComponent.vue';
import GameCanvas from 'components/GameCanvas.vue';
import BuddiesComponent from 'components/BuddiesComponent.vue';
import { Vue, Options } from 'vue-class-component'

@Options({
  components: { ExampleComponent, GameCanvas, BuddiesComponent }
})
export default class PageIndex extends Vue {
  
  created() {
    // Do Nothing
  }
};
</script>
