import SketchStore from 'src/store/sketch_store';
import p5, { Vector, Color } from 'p5';
import { analogous, complement, randomColor } from 'src/helpers/color_utils';
import { Renderable, Buddy } from './buddy';


export class Egg implements Renderable {
  age = 0;
  hatchAge = 500;
  expirationAge = 1000;
  outline: Color;

  constructor(
    readonly p: p5,
    readonly position: Vector,
    readonly color: Color = randomColor(p),
    readonly generation = 1
  ) {
    this.outline = complement(p, color)[1];
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
    const p = SketchStore.mainGraphic;
    if (!p) {
      return;
    }
    p.push();
    p.translate(this.position.x, this.position.y);
    p.fill(this.alphaColor(this.color));
    p.stroke(this.alphaColor(this.outline));
    p.rotate(p.random(-.05, .05) * p.TWO_PI);
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
    d.textSize(32);
    d.textAlign(d.CENTER, d.BASELINE);
    d.text(this.debugText, this.position.x, this.position.y - 32);
    d.pop();
  }

  private alphaColor(color: Color) {
    const modifiedColor = this.p.color(color);
    modifiedColor.setAlpha(this.alpha);
    return modifiedColor;
  }

  private get debugText() {
    return this.expired
      ? `<${this.age}>`
      : this.ready
        ? `(${this.age})`
        : `[${this.age}]`;
  }

  private get size() {
    const base = this.expired
      ? 10
      : this.ready
        ? this.expirationAge - this.age
        : this.age;
    return 5 * Math.pow(base, 0.3);
  }
  private get width() {
    return (
      this.size * 0.8 +
      (this.almostReady
        ? this.p.sin(
          ((this.age + 50) / 100) * (50 / this.timeUntilReady) * this.p.TWO_PI
        ) * 5
        : 0)
    );
  }
  private get height() {
    return (
      this.size +
      (this.almostReady
        ? this.p.sin(
          (this.age / 100) * (100 / this.timeUntilReady) * this.p.TWO_PI
        ) * 4
        : 0)
    );
  }

  private get alpha() {
    return !this.ready
      ? 1
      : (this.expirationAge - this.age) / (this.expirationAge - this.hatchAge);
  }

  private get almostReady() {
    return this.timeUntilReady < this.hatchAge * 0.4;
  }

  private get timeUntilReady() {
    return Math.abs(this.hatchAge - this.age);
  }

  get ready() {
    return this.age >= this.hatchAge;
  }

  get expired() {
    return this.age >= this.expirationAge;
  }

  hatch(p: p5) {
    return new Buddy(
      p,
      this.position,
      analogous(this.p, this.color),
      this.generation
    );
  }
}
