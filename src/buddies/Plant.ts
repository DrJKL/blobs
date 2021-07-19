import SketchStore from 'src/store/sketch_store';
import p5, { Vector, Color } from 'p5';
import {   randomColor } from 'src/helpers/color_utils';
import { Renderable } from './buddy';


export class Plant implements Renderable {
  age = 0;

  constructor(
    readonly p: p5,
    readonly position: Vector,
    readonly color: Color = randomColor(p),
    readonly generation = 1
  ) {
    this.color.setAlpha(0.1);
  }

  update() {
    this.age++;
  }

  draw() {
    this.render();
    this.renderDebug();
  }

  render() {
    const p = SketchStore.resourceGraphic;
    if (!p) {
      return;
    }
    p.push();
    p.translate(this.position.x, this.position.y);
    p.fill(this.alphaColor(this.color));
    p.ellipse(0, 0, this.width, this.height);
    p.pop();
  }

  renderDebug() {
    const d = SketchStore.debugGraphic;
    if (!d || !SketchStore.isDebug) {
      return;
    }
    d.push();
    d.fill(0, 0, 100, 1);
    d.textSize(16);
    d.textAlign(d.CENTER, d.BASELINE);
    d.text(this.debugText, this.position.x, this.position.y - 16);
    d.pop();
  }

  private alphaColor(color: Color) {
    const modifiedColor = this.p.color(color);
    modifiedColor.setAlpha(this.alpha);
    return modifiedColor;
  }

  private get debugText() {
    return `PLANT ${this.age}`;
  }

  private get size() {
    return 20;
  }
  private get width() {
    return (
      this.size)
    ;
  }
  private get height() {
    return (
      this.size
    );
  }

  private get alpha() {
    return 1;
  }

}
