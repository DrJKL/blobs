<template>
  <div class="game-canvas-container">
    <h1>Other One {{ num }}</h1>

    <div id="p5-container" ref="p5Container" @selectstart="doNothing($event)"> </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Ref } from 'vue-property-decorator';
import { Subscription, timer } from 'rxjs';
import p5 from 'p5';
import {buddiesSketch} from '../buddies/buddies_sketch';
export default class ComponentName extends Vue {
  num = 0;

  @Ref() p5Container!: HTMLDivElement | undefined;

  p5Handle?: p5;

  mounted() {

    this.p5Handle = new p5(buddiesSketch, this.p5Container);
  }

  doNothing(event: MouseEvent) {

    // DO NOTHING
  }
}
</script>

<style lang="scss" scoped></style>
