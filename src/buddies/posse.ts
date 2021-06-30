import p5, { Vector } from 'p5';
import { Buddy } from './buddy';
export class Posse {
    buddies: Buddy[];
    maxBuddies = 10;
    constructor(readonly p: p5) {
        this.buddies = [];
    }

    clearSomeOfTheBuddies() {
        while (this.buddies.length > this.maxBuddies) {
            this.buddies.shift();
        }
    }

    makeAllTheBuddies() {
        while (this.buddies.length < this.maxBuddies) {
            this.addNewBuddy();
        }
    }

    addNewBuddy(opt_location?: Vector) {
        const location =
            opt_location ||
            this.p.createVector(
                this.p.random(this.p.width),
                this.p.random(this.p.height)
            );
        this.buddies.push(new Buddy(this.p, location));
        // state.buddiesCount++;
    }

    doTheThing() {
        this.buddies.forEach((buddy) => buddy.draw(this.buddies));
        this.clearSomeOfTheBuddies();
        this.makeAllTheBuddies();
    }
}
