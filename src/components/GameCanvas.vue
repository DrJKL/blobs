<template>
  <div class="game-canvas-container">
    <h1>THIS</h1>
    <canvas ref="gameCanvas" width="600" height="400">Nope, No Canvas.</canvas>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import {Ref} from 'vue-property-decorator';
export default class ComponentName extends Vue {
  @Ref() gameCanvas!: HTMLCanvasElement;

  mounted() {
    const realCanvas = this.gameCanvas;
    if (!realCanvas) {
      console.error('uh oh', this.gameCanvas);
      return;
    }
    const ctx = realCanvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#F0F';
      ctx.fillRect(0,0,realCanvas.width, realCanvas.height)
    }
  }
}
</script>

<style lang="scss" scoped></style>
