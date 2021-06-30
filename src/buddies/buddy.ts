import { AvoidBordersDrive, AvoidOtherBuddiesDrive, Drive, MoveRandomly } from './drives';
import p5, { Vector, Color } from 'p5';

function randomColor(p: p5): Color {
    return p.color(p.random(100), p.random(50, 100), p.random(50, 100));
}

export class Segment {
    position: Vector;
    color: Color;
    constructor(readonly p: p5, position: Vector, opt_color?: Color) {
        this.position = position;
        this.color = opt_color || randomColor(p);
        this.color.setAlpha(0.07);
    }

    render() {
        this.p.fill(this.color);
        this.p.stroke(this.p.color(0, 0, 100, 0.01));
        this.p.strokeWeight(1);
        this.p.circle(this.position.x, this.position.y, this.position.z);
    }

    copy(velocity: Vector, size: number, color: Color) {
        const kidPosition = Vector.add(this.position, velocity);
        kidPosition.z = size;
        return new Segment(this.p, kidPosition, color);
    }
}

export class Buddy {
    age: number;
    velocity: Vector;
    acceleration: Vector;
    size: number;
    maxSpeed: number;
    maxLength: number;
    body: Segment[];
    colors: Color[];
    secondaryColor: Color;

    drives: Drive[];

    stomach: Array<unknown>;
    stomachCapacity: number;
    calories: number;

    constructor(readonly p: p5, pos: Vector) {
        this.age = 0;

        this.velocity = Vector.random2D();
        this.acceleration = p.createVector();
        this.size = 15;

        this.maxSpeed = this.size / 4;
        this.maxLength = 100;

        p.colorMode(p.RGB, 255, 255, 255, 1);
        this.colors = [
            this.p.color(255, 106, 213, 0.07),
            this.p.color(199, 116, 232, 0.07),
            this.p.color(173, 140, 255, 0.07),
            this.p.color(135, 149, 232, 0.07),
        ];
        p.colorMode(p.HSB, 360, 100, 100, 1);
        this.secondaryColor = randomColor(p);
        this.secondaryColor.setAlpha(0.2);

        pos.z = this.velocity.mag();
        this.body = [
            new Segment(p, pos.copy(), this.colors[0]),
        ];

        this.drives = [
            new AvoidBordersDrive(),
            new AvoidOtherBuddiesDrive(),
            new MoveRandomly(),
        ];

        this.stomach = [];
        this.stomachCapacity = 3;
        this.calories = 100;
    }

    get position() {
        return this.body[0].position;
    }

    draw(buddies: Buddy[]) {
        this.age++;

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
        this.velocity.add(this.acceleration)
            .limit(this.maxSpeed);

        while (this.body.length >= this.maxLength) {
            this.body.pop();
        }
        const segColorIndex = Math.floor(this.age / 10) % this.colors.length;
        const segColor = this.colors[segColorIndex];
        const newSegment = this.body[0].copy(
            this.velocity,
            (this.size * 2) / this.p.max(this.velocity.mag(), 1), segColor);
        this.body.unshift(newSegment);
        this.acceleration.mult(0);
    }

    steer(desired: Vector) {
        desired.sub(this.velocity);
        desired.limit(3);
        this.applyForce(desired);
    }

}