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
            :max="20"
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
    <div class="column col justify-evenly">
      <q-field filled :hint="`Lifetime ${buddyMaxAge}`">
        <template #control>
          <q-slider
            v-model="buddyMaxAge"
            class="col self-center buddies-slider"
            color="orange"
            :step="10"
            :min="0"
            :max="600"
            snap
            label
            dark
            @wheel="buddyMaxAgeScroll"
          />
        </template>
      </q-field>
    </div>
    <div class="column col justify-evenly">
      <q-field filled :hint="`Buddy Length ${buddyLength}`">
        <template #control>
          <q-slider
            v-model="buddyLength"
            class="col self-center buddies-slider"
            color="amber"
            :step="1"
            :min="0"
            :max="100"
            snap
            label
            dark
            @wheel="buddyLength"
          />
        </template>
      </q-field>
    </div>
    <q-btn-group>
      <q-toggle
        v-model="debug"
        class="col-grow"
        title="Debug"
        icon="fa fa-bug fa-stack-1x"
      />
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
        icon="fa fa-eraser"
        push
        color="accent"
        @click="clearScreen"
      />

      <q-btn
        title="Kill Everything"
        icon="fa fa-skull-crossbones"
        push
        color="accent"
        @click="killEverything"
      />
    </q-btn-group>
    <buddy-details-selector />
  </div>
</template>
<script lang="ts">
import buddy_store from 'src/store/buddy_store';
import { Options, Vue } from 'vue-class-component';
import GameStore from '../store/game_store';
import SketchStore from '../store/sketch_store';
import BuddyDetailsSelector from './BuddyDetailsSelector.vue';

@Options({
  name: 'Buddies Controls',
  components: { BuddyDetailsSelector },
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

  get buddyMaxAge() {
    return buddy_store.ageLimit;
  }
  set buddyMaxAge(newLimit: number) {
    buddy_store.setAgeLimit(newLimit);
  }

  get buddyLength() {
    return buddy_store.buddyLength;
  }
  set buddyLength(newLength: number) {
    buddy_store.setBuddyLength(newLength);
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
  killEverything() {
    GameStore.posseMaybe().killEverything();
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
  buddyMaxAgeScroll(event: WheelEvent) {
    this.buddyMaxAge = this.buddyMaxAge - Math.sign(event.deltaY);
  }
  buddyMaxLengthScroll(event: WheelEvent) {
    this.buddyLength = this.buddyLength - Math.sign(event.deltaY);
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
