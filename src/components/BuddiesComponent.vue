<template>
  <div class="game-canvas-container col row justify-around">
    <q-card bordered class="col-3 info-column">
      <q-card-section class="text-h3">Info</q-card-section>
      <q-card-section horizontal class="text-h5 justify-between">
        <q-card-section>Buddies: </q-card-section>
        <q-card-section class="value">{{ activeBuddies }}</q-card-section>
      </q-card-section>
      <q-card-section class="text-h5 justify-between">Eggs </q-card-section>
      <q-card-section horizontal class = "column">
        <q-card-section horizontal class="justify-between">
          <q-card-section>Unhatched</q-card-section>
          <q-card-section class="value">{{ unhatchedBuddies }}</q-card-section>
        </q-card-section>
        <q-card-section horizontal class="justify-between">
          <q-card-section>Ready To Hatch</q-card-section>
          <q-card-section class="value">{{ readyEggs }}</q-card-section>
        </q-card-section>
        <q-card-section horizontal class="justify-between">
          <q-card-section>Expired</q-card-section>
          <q-card-section class="value">{{ expiredEggs }}</q-card-section>
        </q-card-section>
      </q-card-section>
    </q-card>
    <div
      id="p5-container"
      ref="p5Container"
      class="col-auto column items-center buddies-plate"
      @selectstart="doNothing($event)"
      @contextmenu="doNothing($event)"
    ></div>

    <div class="col-3 column">
      <buddies-controls />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Ref } from 'vue-property-decorator';
import p5 from 'p5';
import { buddiesSketch } from '../buddies/buddies_sketch';

import BuddiesControls from './BuddiesControls.vue';
import { Posse } from 'src/buddies/posse';

import StatsStore from 'src/store/stats_store';

@Options({
  name: 'Buddies!',
  components: { BuddiesControls },
})
export default class ComponentName extends Vue {
  @Ref() p5Container!: HTMLDivElement | undefined;

  p5Handle?: p5;
  readonly posse = new Posse();

  mounted() {
    if (!this.p5Handle) {
      this.p5Handle = new p5(buddiesSketch(this.posse), this.p5Container);
    }
  }
  unmounted() {
    this.p5Handle?.noLoop();
  }

  get activeBuddies() {
    return this.posse.buddies.length;
  }


  get unhatchedBuddies() {
    return this.posse.eggs.length;
  }
  
  get readyEggs() {
    return this.posse.eggs.filter(egg => egg.ready).length;
  }
  
  get expiredEggs() {
    return StatsStore.eggsExpired;
  }
  get hatchedEggs() {
    return StatsStore.eggsHatched;
  }

  doNothing(event: MouseEvent) {
    if (!event.shiftKey) event.preventDefault();
    // DO NOTHING
  }
}
</script>

<style lang="scss" scoped>
.game-canvas-container {
  width: calc(100vw - 120px);
  padding: 0 2em;
}
.buddies-plate :deep(canvas) {
  box-sizing: content-box;
  outline: 4px groove $primary;
  border: 4px groove $positive;
}
.info-column {
  .value {
    align-content: center;
    text-align: right;
  }
}
</style>
