<template>
  <div class="game-controls column justify-evenly">
    <div class="column col justify-evenly wrap">
      <q-field filled :hint="`Max Buddies ${maxBuddies}`">
        <template #control>
          <q-slider
            v-model="maxBuddies"
            class="col self-center buddies-slider"
            color="red"
            :step="1"
            :min="0"
            :max="50"
            label
            dark
            @wheel="maxBuddiesScroll"
          />
        </template>
      </q-field>
    </div>
    <div class="column col justify-evenly">
      <q-field filled :hint="`Fog ${fogValue}`">
        <template #control>
          <q-slider
            v-model="fogValue"
            class="col self-center buddies-slider"
            color="red"
            :step="1"
            :min="0"
            :max="10"
            label
            dark
            @wheel="fogValueScroll"
          />
        </template>
      </q-field>
    </div>
    <q-toggle v-model="debug">Debug</q-toggle>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import GameStore from '../store/game_store';
import SketchStore from '../store/sketch_store';

@Options({
  name: 'Buddies Controls',
})
export default class BuddiesControls extends Vue {
  get fogValue() {
    return GameStore.fogValue;
  }
  set fogValue(newValue: number) {
    GameStore.setFogValue(newValue);
  }
  get maxBuddies() {
    return GameStore.maxBuddies;
  }
  set maxBuddies(newValue: number) {
    GameStore.setMaxBuddies(newValue);
  }

  get debug() {
    return SketchStore.debugOn;
  }
  set debug(newDebug: boolean) {
    SketchStore.setDebug(newDebug);
  }

  maxBuddiesScroll(event: WheelEvent) {
    this.maxBuddies = this.maxBuddies - Math.sign(event.deltaY);
  }
  fogValueScroll(event: WheelEvent) {
    this.fogValue = this.fogValue - Math.sign(event.deltaY);
  }
}
</script>
<style lang="scss" scoped>
.fog-slider {
  min-height: 10em;
}
.game-controls {
  flex:1;
}
</style>
