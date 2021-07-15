import { Posse } from './posse';
import SketchStore from 'src/store/sketch_store';
import {
  AvoidBordersDrive,
  AvoidOtherBuddiesDrive,
  Drive,
  MoveRandomly,
} from './drives';
import p5, { Vector, Color } from 'p5';
import { analogous, complement } from 'src/helpers/color_utils';
import BuddyStore from '../store/buddy_store';
import Queue from 'src/helpers/queue';

function randomColor(p: p5): Color {
  return p.color(p.random(360), p.random(40, 100), p.random(80, 100));
}

function defaultDrives() {
  return [
    new AvoidBordersDrive(),
    new AvoidOtherBuddiesDrive(),
    new MoveRandomly(),
  ];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ogColors(p: p5) {
  return [
    p.color(316, 58, 99, 0.07),
    p.color(283, 50, 91, 0.07),
    p.color(257, 45.1, 100, 0.07),
    p.color(231, 41.8, 91, 0.07),
  ];
}
interface Renderable {
  render(): void;
  renderDebug(): void;
}

export class Segment implements Renderable {
  constructor(
    readonly p: p5,
    public position: Vector,
    public color: Color = randomColor(p)
  ) {
    this.color.setAlpha(0.27);
  }

  render() {
    this.p.push();
    this.p.noStroke();
    this.p.fill(this.color);
    this.p.translate(this.position.x, this.position.y);
    this.p.circle(0, 0, this.position.z);
    this.p.pop();
  }

  renderDebug() {
    const debugLayer = SketchStore.debugGraphic;
    const sketch = SketchStore.mainSketch;
    if (!debugLayer || !sketch || !SketchStore.debugOn) return;
    debugLayer.push();

    const px = this.position.x;
    const py = this.position.y;

    const mx = sketch.mouseX - px;
    const my = sketch.mouseY - py;

    debugLayer.stroke(0, 0, 100, 1);
    debugLayer.strokeWeight(1);
    debugLayer.noFill();

    const directAngle = sketch.atan2(my, mx) - sketch.atan2(py, px);

    debugLayer.translate(px, py);
    debugLayer.rotate(directAngle);

    debugLayer.line(0, 0, 30, 30);

    debugLayer.pop();
    // Nothing yet.
  }

  copy(velocity: Vector, size: number, color: Color) {
    const kidPosition = Vector.add(this.position, velocity);
    kidPosition.z = size;
    return new Segment(this.p, kidPosition, color);
  }
}

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
    p.fill(this.alphaColor(this.color));
    p.stroke(this.alphaColor(this.outline));
    p.ellipse(this.position.x, this.position.y, this.width, this.height);
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
    return 10 * Math.pow(base, 0.3);
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
    return this.timeUntilReady < 200;
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

export class Buddy implements Renderable {
  age = 0;
  alive = true;
  velocity = Vector.random2D();
  acceleration = new Vector();
  size = 15;
  get maxSpeed() {
    return this.size / 4;
  }
  maxLength = 25;
  body: Queue<Segment>;
  secondaryColor: Color;

  drives: Drive[] = defaultDrives();

  stomach: Array<unknown> = [];
  stomachCapacity = 3;
  calories = 100;

  constructor(
    readonly p: p5,
    pos: Vector,
    readonly colors: Color[] = analogous(p, randomColor(p)),
    readonly generation = 1
  ) {
    this.secondaryColor = randomColor(p);
    this.secondaryColor.setAlpha(0.2);

    pos.z = this.velocity.mag();
    this.body = new Queue<Segment>();
    this.body.enqueue(new Segment(p, pos.copy(), this.colors[0]));
  }

  get position() {
    return this.body.peekTail()?.position ?? new Vector();
  }

  get allDone() {
    return this.body.size() === 1;
  }

  update(posse: Posse) {
    this.age++;
    if (this.age > BuddyStore.ageLimit) {
      this.alive = false;
    }

    this.move(posse.buddies);
  }

  draw() {
    this.render();
    this.renderDebug();
  }

  render() {
    this.p.noStroke();
    const bodySegs = this.body.entries();
    for (let i = 0; i < bodySegs.length - 1; i++) {
      const pos = bodySegs[i];
      pos.render();
      pos.position.z *= 0.99;
    }
    if (this.alive) {
      this.drawForce(this.velocity, this.position);
    }
  }
  renderDebug() {
    const d = SketchStore.debugGraphic;
    if (!d || !SketchStore.isDebug) {
      return;
    }
    d.push();
    d.fill(0, 0, 100, 1);
    d.textSize(32);
    d.textAlign(d.CENTER);
    d.text(this.debugText, this.position.x, this.position.y - 20);
    d.pop();
  }
  private get debugText() {
    return `${this.age} - ${this.generation}`;
  }

  move(buddies: Buddy[]) {
    for (const drive of this.drives) {
      for (const goal of drive.getGoals(this.p, this, buddies)) {
        this.steer(goal);
      }
      for (const force of drive.getForces(this.p, this, buddies)) {
        this.applyForce(force);
      }
    }
    this.changeVelocity();
  }

  applyForce(force: Vector) {
    force.div(this.size);
    this.acceleration.add(force);
  }

  drawForce(force: Vector, pos: Vector) {
    const forceVis = p5.Vector.mult(force, 10).add(pos);
    this.p.push();
    this.p.stroke(this.secondaryColor);
    this.p.strokeWeight(4);
    this.p.noFill();
    this.p.line(pos.x, pos.y, forceVis.x, forceVis.y);
    this.p.pop();
  }

  changeVelocity() {
    this.velocity.add(this.acceleration).limit(this.maxSpeed);

    if (!this.alive) {
      const toPrune = this.body.size() / 10;
      for (let i = 0; i < toPrune; i++) {
        this.body.dequeue();
      }
      return;
    }

    while (this.body.size() >= this.maxLength) {
      this.body.dequeue();
    }
    const head = this.body.peekTail();
    if (!head) {
      return;
    }
    const segColorIndex = Math.floor(this.age / 10) % this.colors.length;
    const segColor = this.colors[segColorIndex];
    const newSegment = head.copy(
      this.velocity,
      (this.size * 2) / this.p.max(this.velocity.mag(), 1),
      segColor
    );
    this.body.enqueue(newSegment);
    this.acceleration.mult(0);
  }

  steer(desired: Vector) {
    desired.sub(this.velocity);
    desired.limit(3);
    this.applyForce(desired);
  }

  toEgg() {
    return new Egg(this.p, this.position, this.colors[0], this.generation + 1);
  }
}
