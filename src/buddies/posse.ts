import { Graphics, Vector } from 'p5';
import { Buddy } from './buddy';

import GameStore from 'src/store/game_store';

export class Posse {
    buddies: Buddy[] = [];
    constructor(readonly p: Graphics) { }

    get maxBuddies() {
        return GameStore.maxBuddies;
    }

    clearSomeOfTheBuddies() {
        while (this.buddies.length > this.maxBuddies) {
            this.buddies.shift();
        }
    }

    makeAllTheBuddies() {
        const limitPerRound = Math.floor(Math.random() * 2);
        let buddiesThisRound = 0;
        while (this.buddies.length < this.maxBuddies && buddiesThisRound < limitPerRound) {
            ++buddiesThisRound;
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
    }

    doTheThing() {
        this.buddies.forEach((buddy) => buddy.draw(this.buddies));
        this.buddies = this.buddies.filter(buddy => buddy.alive);
        this.clearSomeOfTheBuddies();
        this.makeAllTheBuddies();
    }
}
