<template>
  <div class="game-canvas-container">
    <div
      id="p5-container"
      ref="p5Container"
      @selectstart="doNothing($event)"
    ></div>

    <div class="state col">
      <div class="row fog">{{ fogValue }} Fog</div>
      <div class="row maxBuddies">{{ maxBuddies }} Max Buddies</div>
    </div>

    <div class="game-controls col">
      <div class="row">
        <q-btn
          outline
          rounded
          push
          color="primary"
          class="col"
          @click="iThinkItsClearingUp()"
          >Less Fog</q-btn
        >
        <q-btn
          outline
          rounded
          push
          color="primary"
          class="col"
          @click="isItGettingDarker()"
          >More Fog</q-btn
        >
      </div>
      <div class="row">
        <q-slider v-model="fogValue" color="red" :step="1" :min="0" :max="10" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Ref } from 'vue-property-decorator';
import p5 from 'p5';
import { buddiesSketch } from '../buddies/buddies_sketch';

import { namespace } from 'vuex-class';
import GameStore from '../store/game_store';

const gameModule = namespace('gamestore');

@Options({
  name: 'Buddies!',
})
export default class ComponentName extends Vue {
  @Ref() p5Container!: HTMLDivElement | undefined;

  p5Handle?: p5;

  mounted() {
    if (!this.p5Handle) {
      this.p5Handle = new p5(buddiesSketch, this.p5Container);
    }
  }
  unmounted() {
    this.p5Handle?.noLoop();
  }

  get fogValue() {
    return GameStore.fogValue;
  }
  set fogValue(newValue: number) {
    GameStore.setFogValue(newValue);
  }

  @gameModule.State
  private maxBuddies!: number;

  @gameModule.Action
  iThinkItsClearingUp!: () => void;
  @gameModule.Action
  isItGettingDarker!: () => void;

  doNothing(event: MouseEvent) {
    event.preventDefault();
    // DO NOTHING
    const gs = GameStore;
    console.log(gs, GameStore);
  }
}
</script>

<style lang="scss" scoped>
.state {
  background: green;
}
</style>
