import SketchStore from 'src/store/sketch_store';
import p5, { Vector, Color } from 'p5';
import { randomColor } from 'src/helpers/color_utils';
import { Renderable } from './buddy';

export class Plant implements Renderable {
  age = 0;
  audrey: Plant2;

  constructor(
    readonly p: p5,
    readonly position: Vector,
    readonly color: Color = randomColor(p),
    readonly generation = 1
  ) {
    this.audrey = new Plant2(p, position, color, generation);
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
    this.audrey.draw();
    // p.push();
    // p.translate(this.position.x, this.position.y);
    // p.fill(this.color);
    // p.ellipse(0, 0, this.width, this.height);
    // p.pop();
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
    return this.size;
  }
  private get height() {
    return this.size;
  }

  private get alpha() {
    return 1;
  }
}

class Plant2 {
  numPoints = 20;
  distances = Array.from({ length: this.numPoints }).map(
    (i, idx, arr) => idx / arr.length
  );
  metaPoints: Wiggler[] = [];

  constructor(
    readonly p: p5,
    readonly position: Vector,
    private color: Color = randomColor(p),
    readonly generation = 1
  ) {
    this.initMetas();
  }
  initMetas() {
    
    this.distances = this.p.shuffle(this.distances) as number[];
    this.distances.forEach((pc, i, arr) => {
      const opc = i / arr.length;
      const distance = pc * (50);
      const modAngle = 0.2 * this.p.TWO_PI;
      const mpp = p5.Vector.fromAngle(-opc * modAngle - modAngle, distance);
      this.metaPoints.push(new Wiggler(this.p, mpp));
    });
  }
  moveMetas() {
    const p = SketchStore.mainSketch;
    if (!p) { return; }
    this.metaPoints.forEach((mp) => {
      const howMuch = 0.006 * p.sin(p.frameCount / mp.period) * mp.speed;
      mp.pos.rotate(
        howMuch
      );
    });
  }
  draw() {
    const p = SketchStore.resourceGraphic;
    if (!p) {
      return;
    }
    p.push();
    let c = this.color;
    p.translate(this.position.x, this.position.y);
    p.stroke(c);
    p.noFill();

    for (const mp of this.metaPoints) {
      p.strokeWeight(mp.weight);
      p.beginShape();
      const points2 = mp.makeZiggyPoints();
      for (const pt of points2) {
        p.curveVertex(pt.x, pt.y);
      }
      p.endShape();
      c = p.color(
        (p.hue(c) + 2) % 360,
        p.saturation(c),
        p.brightness(c)
      );
      p.stroke(c);
    }
    p.pop();
   this.moveMetas();
  }
}

class Wiggler {
  speed: number;
  waveSpeed: number;
  period: number;
  weight: number;
  waves: number;
  constructor(private readonly p: p5, public pos: Vector) {
    this.speed = p.random(0.5, 1.5);
    this.waveSpeed = p.random(0, 2);
    this.period = p.random(8, 32);
    this.weight = p.random(1, 4);
    this.waves = p.random(50, 10);
  }
  makeZiggyPoints() {
    const destination = this.pos;
    const totalDistance = destination.mag();
    const ziggyPoints = [];
    ziggyPoints.push(this.p.createVector());
    const ziggyPts = Math.pow(totalDistance / this.waves, 1.2);
    for (let i = 0; i < ziggyPts; i++) {
      const pc = i / ziggyPts;
      const p = p5.Vector.mult(destination, pc);
      const sign = i % 2 == 0 ? -1 : 1;
      const tangent = this.p.createVector(destination.y, -destination.x);
      tangent.setMag(
        sign * this.p.sin(this.p.frameCount / 144) * 4 * this.waveSpeed
      );
      p.add(tangent);
      ziggyPoints.push(p);
    }
    ziggyPoints.push(destination);
    return ziggyPoints;
  }
}
