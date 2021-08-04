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
    d.noFill();
    d.stroke(d.color(0, 0, 100, 1));
    d.ellipse(this.position.x, this.position.y, this.size);
    for (const f of this.audrey.frondPoints) {
      d.ellipse(f.pos.x, f.pos.y, 5);
    }
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
    return 50;
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
  frondPoints: Wiggler[] = this.initFronds();

  constructor(
    readonly p: p5,
    readonly position: Vector,
    private color: Color = randomColor(p),
    readonly generation = 1
  ) {}

  initFronds() {
    const distances = Array.from({ length: this.numPoints }).map(
      (i, idx, arr) => idx / arr.length
    );
    return this.p.shuffle(distances).map((pc: number, i, arr) => {
      const opc = i / arr.length;
      const distance = pc * 50;
      const modAngle = 0.2 * this.p.TWO_PI;
      const mpp = p5.Vector.fromAngle(-opc * modAngle - modAngle, distance);
      console.log({pc, opc, distance, mpp,}, mpp.mag());
      return new Wiggler(this.p, mpp);
    });
  }
  moveMetas() {
    const p = SketchStore.mainSketch;
    if (!p) {
      return;
    }
    this.frondPoints.forEach((mp) => {
      const howMuch = 0.006 * p.sin(p.frameCount / mp.period) * mp.speed;
      mp.pos.rotate(howMuch);
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

    for (const mp of this.frondPoints) {
      p.strokeWeight(mp.weight);
      p.beginShape();
      p.vertex(0, 0);
      const points2 = mp.makeZiggyPoints();
      for (const pt of points2) {
        p.curveVertex(pt.x, pt.y);
      }
      p.vertex(mp.pos.x, mp.pos.y);
      p.endShape();
      c = p.color(
        (p.hue(c) + 2) % 360,
        p.saturation(c),
        p.brightness(c),
        p.alpha(c)
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
    // ziggyPoints.push(destination);
    return ziggyPoints;
  }
}
