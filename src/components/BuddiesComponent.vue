<template>
  <div class="game-canvas-container row">
    <div
      id="p5-container"
      ref="p5Container"
      class="col buddies-plate"
      @selectstart="doNothing($event)"
    ></div>

    <div class="col">
      <buddies-controls />
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
import BuddiesControls from './BuddiesControls.vue';

const gameModule = namespace('gamestore');

@Options({
  name: 'Buddies!',
  components: { BuddiesControls },
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
.game-canvas-container {
  width: calc(100vw - 120px);
}
.buddies-plate ::v-deep canvas {
  outline: 4px groove $primary;
  border: 4px groove $positive;
}
</style>
