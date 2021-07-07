<template>
  <div class="game-canvas-container row">
    <div
      id="p5-container"
      ref="p5Container"
      class="col buddies-plate"
      @selectstart="doNothing($event)"
    ></div>

    <div class="col column">
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

  doNothing(event: MouseEvent) {
    event.preventDefault();
    // DO NOTHING
  }
}
</script>

<style lang="scss" scoped>
.game-canvas-container {
  width: calc(100vw - 120px);
}
.buddies-plate :deep(canvas) {
  box-sizing: content-box;
  outline: 4px groove $primary;
  border: 4px groove $positive;
}
</style>
