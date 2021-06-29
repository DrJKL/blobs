<template>
  <div class="game-canvas-container">
    <h1>THIS {{ num }}</h1>
    <canvas ref="gameCanvas" class="game-cangas" width="600" height="400"
      >Nope, No Canvas.</canvas
    >
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Ref } from 'vue-property-decorator';
import { Subscription, timer } from 'rxjs';
export default class ComponentName extends Vue {
  @Ref() gameCanvas!: HTMLCanvasElement;

  num = 0;

  canvasTimer?: Subscription;

  mounted() {
    const realCanvas = this.gameCanvas;
    if (!realCanvas) {
      console.error('uh oh', this.gameCanvas);
      return;
    }
    const ctx = realCanvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#F0F';
      ctx.fillRect(0, 0, realCanvas.width, realCanvas.height);
    }

    this.canvasTimer = timer(0, 500).subscribe((i) => {
      if (ctx) {
        ctx.fillStyle = '#' + Math.random().toString(16).substr(2, 6);
        ctx?.fillRect(0, 0, realCanvas.width, realCanvas.height);
      }
      this.num = i;
      console.log(i);
    });
  }
}
</script>

<style lang="scss" scoped></style>
