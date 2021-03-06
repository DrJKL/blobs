import { Posse } from './posse';
import SketchStore from 'src/store/sketch_store';
import {
  AvoidBordersDrive,
  AvoidEggsDrive,
  AvoidOtherBuddiesDrive,
  AvoidPlantsDrive,
  Drive,
  MoveRandomly,
} from './drives';
import p5, { Vector, Color } from 'p5';
import { analogous, randomColor, complement } from 'src/helpers/color_utils';
import BuddyStore from '../store/buddy_store';
import Queue from 'src/helpers/queue';
import { Egg } from './Egg';
import buddy_store from '../store/buddy_store';

function defaultDrives(): Drive[] {
  return [
    new AvoidBordersDrive(),
    new AvoidOtherBuddiesDrive(),
    new AvoidEggsDrive(),
    new AvoidPlantsDrive(),
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
export interface Renderable {
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

export class Buddy implements Renderable {
  age = 0;
  alive = true;
  velocity = Vector.random2D();
  acceleration = new Vector();
  size = 15;
  get maxSpeed() {
    return this.size / 4;
  }
  get maxLength() {
    return buddy_store.buddyLength;
  }
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
    this.secondaryColor = complement(p, colors[0])[1];
    this.secondaryColor.setAlpha(.8);

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
    if (this.age > BuddyStore.ageLimit && BuddyStore.ageLimit <=600) {
      this.alive = false;
    }

    this.move(posse);
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

  move( posse: Posse) {
    for (const drive of this.drives) {
      for (const goal of drive.getGoals(this.p, this, posse)) {
        this.steer(goal);
      }
      for (const force of drive.getForces(this.p, this, posse)) {
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
