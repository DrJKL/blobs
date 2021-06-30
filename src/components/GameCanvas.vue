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
      ctx.fillStyle = '#FFF';
      ctx.fillRect(0, 0, realCanvas.width, realCanvas.height);
    }

        let x1 = randInt(0, realCanvas.width);
        let x2 = randInt(0, realCanvas.width);
        let y1 = randInt(0, realCanvas.height);
        let y2 = randInt(0, realCanvas.height);


    this.canvasTimer = timer(0, 100).subscribe((i) => {
      if (ctx) {
        ctx.fillStyle = '#' + Math.random().toString(16).substr(2, 8);
        ctx.fillRect(
          Math.min(x1, x2),
          Math.min(y1, y2),
          Math.max(x1, x2) - Math.min(x1, x2),
          Math.max(y1, y2) - Math.min(y1, y2)
        );
      }
      let x1Delta = randInt(-30, 30);
      let x2Delta = randInt(-30, 30);
      let y1Delta = randInt(-30, 30);
      let y2Delta = randInt(-30, 30);

      x1 = clamp(x1 + x1Delta, 0, realCanvas.width);
      x2 = clamp(x2 + x2Delta, 0, realCanvas.width);
      y1 = clamp(y1 + y1Delta, 0, realCanvas.height);
      y2 = clamp(y2 + y2Delta, 0, realCanvas.height);
      this.num = i;
    });
  }
}
function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function clamp(num: number, min: number, max: number) {
  return Math.max(min, Math.min(num, max));
}
</script>

<style lang="scss" scoped></style>
