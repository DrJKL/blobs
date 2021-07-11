<template>
  <div class="game-controls column justify-evenly">
    <div class="column col justify-evenly wrap">
      <q-field filled :hint="`Max Buddies ${maxBuddies}`">
        <template #control>
          <q-slider
            v-model="maxBuddies"
            class="col self-center buddies-slider"
            color="green"
            :step="1"
            :min="0"
            :max="50"
            snap
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
            snap
            label
            dark
            @wheel="fogValueScroll"
          />
        </template>
      </q-field>
    </div>
    <div class="column col justify-evenly">
      <q-field filled :hint="`FrameRate ${frameRate}`">
        <template #control>
          <q-slider
            v-model="frameRate"
            class="col self-center buddies-slider"
            color="blue"
            :step="1"
            :min="0"
            :max="144"
            snap
            label
            dark
            @wheel="frameRateScroll"
          />
        </template>
      </q-field>
    </div>
    <q-btn-group>
      <q-toggle v-model="debug" title="Debug" icon="fa fa-bug fa-stack-1x" />
      <q-btn
        :title="playButtonText"
        :icon="playButtonIcon"
        push
        color="accent"
        @click="clickPlayPause"
      />
      <q-btn
        title="Step Forward"
        icon="fa fa-step-forward"
        :disable="playing"
        push
        color="accent"
        @click="clickStepForward"
      />
      <q-btn
        title="Clear Screen"
        icon="fa fa-trash-alt"
        push
        color="accent"
        @click="clearScreen"
      />
    </q-btn-group>
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
  get frameRate() {
    return SketchStore.frameRate;
  }
  set frameRate(newValue: number) {
    SketchStore.setFrameRate(newValue);
  }

  get debug() {
    return SketchStore.debugOn;
  }
  set debug(newDebug: boolean) {
    SketchStore.setDebug(newDebug);
  }

  get playing() {
    return SketchStore.playing;
  }

  clickPlayPause() {
    SketchStore.togglePlayState();
  }
  clickStepForward() {
    SketchStore.step();
  }
  clearScreen() {
    SketchStore.clearScreen();
  }

  get playButtonIcon() {
    return `fa fa-${SketchStore.playing ? 'pause' : 'play'}`;
  }
  get playButtonText() {
    return SketchStore.playing ? 'Pause' : 'Play';
  }

  maxBuddiesScroll(event: WheelEvent) {
    this.maxBuddies = this.maxBuddies - Math.sign(event.deltaY);
  }
  fogValueScroll(event: WheelEvent) {
    this.fogValue = this.fogValue - Math.sign(event.deltaY);
  }
  frameRateScroll(event: WheelEvent) {
    this.frameRate = this.frameRate - Math.sign(event.deltaY);
  }
}
</script>
<style lang="scss" scoped>
.fog-slider {
  min-height: 10em;
}
.game-controls {
  flex: 1;
}
</style>
