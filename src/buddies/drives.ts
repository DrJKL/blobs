/* eslint-disable @typescript-eslint/no-unused-vars */
import { Buddy, Egg } from './buddy';
import p5, { Vector } from 'p5';

export interface Drive {
  getGoals(p: p5, buddy: Buddy, buddies: Buddy[]): Vector[];
  getForces(p: p5, buddy: Buddy, buddies: Buddy[]): Vector[];
}
export class XDrive implements Drive {
  goals: Vector[];
  constructor(_p: p5, goals: Vector[]) {
    this.goals = [...goals];
  }
  getGoals(_p: p5, buddy: Buddy, _buddies: Buddy[]) {
    return this.goals.map((goal) => Vector.sub(goal, buddy.position));
  }
  getForces(_p: p5, _buddy: Buddy, _buddies: Buddy[]) {
    return [];
  }
}

export class AvoidBordersDrive implements Drive {
  getGoals(p: p5, buddy: Buddy, _buddies: Buddy[]) {
    const position = buddy.position;
    if (!position) {
      return [];
    }
    const goals: Vector[] = [];
    const offset = 25;
    if (position.x < offset) {
      goals.push(p.createVector(buddy.maxSpeed, buddy.velocity.y));
    }
    if (position.x > p.width - offset) {
      goals.push(p.createVector(-buddy.maxSpeed, buddy.velocity.y));
    }
    if (position.y < offset) {
      goals.push(p.createVector(buddy.velocity.x, buddy.maxSpeed));
    }
    if (position.y > p.height - offset) {
      goals.push(p.createVector(buddy.velocity.x, -buddy.maxSpeed));
    }
    return goals;
  }
  getForces(_p: p5, _buddy: Buddy, _buddies: Buddy[]) {
    return [];
  }
}

export class AvoidOtherBuddiesDrive implements Drive {
  getGoals(_p: p5, _buddy: Buddy, _buddies: Buddy[]) {
    return [];
  }
  getForces(p: p5, buddy: Buddy, buddies: Buddy[]) {
    const forces = [];
    for (const other of buddies) {
      if (buddy === other) {
        continue;
      }
      const otherBody = other.body.entries();
      for (let i = 0; i < otherBody.length; i += 5) {
        const segment = otherBody[i];
        forces.push(repel(p, segment.position, buddy.position));
      }
    }
    return forces;
  }
}

export class AvoidEggsDrive implements Drive {
  getGoals(_p: p5, _buddy: Buddy, _buddies: Buddy[]) {
    return [];
  }
  getForces(p: p5, buddy: Buddy, buddies: Buddy[]) {
    const forces = [];
    const eggs: Egg[] = [];
    for (const other of eggs) {
      forces.push(repel(p, other.position, buddy.position));
    }
    return forces;
  }
}

export class MoveRandomly implements Drive {
  ticks: number;
  constructor() {
    this.ticks = 0;
  }
  getGoals(_p: p5, _buddy: Buddy, _buddies: Buddy[]) {
    return [];
  }
  getForces(_p: p5, _buddy: Buddy, _buddies: Buddy[]) {
    this.ticks++;
    const forces = [];
    // if (this.ticks % 1 == 0) {
    forces.push(Vector.random2D());
    // }
    return forces;
  }
}

function repel(p: p5, buddy: Vector, otherBuddy: Vector) {
  const dir = Vector.sub(buddy, otherBuddy);

  const d = dir.mag();
  if (d > 500) {
    return p.createVector();
  }
  const force = (-1 * 100) / (d * d);

  dir.normalize();
  if (force && !isNaN(force) && isFinite(force)) {
    dir.mult(force);
  }
  return dir;
}
