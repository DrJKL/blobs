import {
    AvoidBordersDrive,
    AvoidOtherBuddiesDrive,
    Drive,
    MoveRandomly,
} from './drives';
import p5, { Vector, Color } from 'p5';
import { analogous } from 'src/helpers/color_utils';
import BuddyStore from '../store/buddy_store';

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

export class Segment {
    constructor(
        readonly p: p5,
        public position: Vector,
        public color: Color = randomColor(p)
    ) {
        this.color.setAlpha(0.27);
    }

    render() {
        this.p.noStroke();
        this.p.fill(this.color);
        this.p.circle(this.position.x, this.position.y, this.position.z);
    }

    copy(velocity: Vector, size: number, color: Color) {
        const kidPosition = Vector.add(this.position, velocity);
        kidPosition.z = size;
        return new Segment(this.p, kidPosition, color);
    }
}

export class Buddy {
    age = 0;
    alive = true;
    velocity = Vector.random2D();
    acceleration = new Vector();
    size = 15;
    get maxSpeed() {
        return this.size / 4;
    }
    maxLength = 20;
    body: Segment[];
    colors: Color[];
    secondaryColor: Color;

    drives: Drive[] = defaultDrives();

    stomach: Array<unknown> = [];
    stomachCapacity = 3;
    calories = 100;

    constructor(readonly p: p5, pos: Vector) {
        this.colors = analogous(p, randomColor(p));
        this.secondaryColor = randomColor(p);
        this.secondaryColor.setAlpha(0.2);

        pos.z = this.velocity.mag();
        this.body = [new Segment(p, pos.copy(), this.colors[0])];
    }

    get position() {
        return this.body[0].position;
    }

    draw(buddies: Buddy[]) {
        if (!this.alive) {
            return;
        }
        this.age++;
        if (this.age > BuddyStore.ageLimit) {
            this.alive = false;
            console.log('💀');
        }

        this.move(buddies);
        this.renderBody();
    }

    renderBody() {
        this.p.noStroke();
        for (const pos of this.body) {
            pos.render();
            pos.position.z *= 0.99;
        }
        this.drawForce(this.velocity, this.position);
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
        this.p.stroke(this.secondaryColor);
        this.p.strokeWeight(4);
        this.p.noFill();
        this.p.line(pos.x, pos.y, forceVis.x, forceVis.y);
    }

    changeVelocity() {
        this.velocity.add(this.acceleration).limit(this.maxSpeed);

        while (this.body.length >= this.maxLength) {
            this.body.pop();
        }
        const segColorIndex = Math.floor(this.age / 10) % this.colors.length;
        const segColor = this.colors[segColorIndex];
        const newSegment = this.body[0].copy(
            this.velocity,
            (this.size * 2) / this.p.max(this.velocity.mag(), 1),
            segColor
        );
        this.body.unshift(newSegment);
        this.acceleration.mult(0);
    }

    steer(desired: Vector) {
        desired.sub(this.velocity);
        desired.limit(3);
        this.applyForce(desired);
    }
}
