import { Vector } from 'p5';
import { Buddy } from './buddy';

import GameStore from 'src/store/game_store';
import SketchStore from 'src/store/sketch_store';

export class Posse {
    buddies: Buddy[] = [];

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
        while (
            this.buddies.length < this.maxBuddies &&
            buddiesThisRound < limitPerRound
        ) {
            ++buddiesThisRound;
            this.addNewBuddy();
        }
    }

    addNewBuddy(opt_location?: Vector) {
        const p = SketchStore.mainGraphic;
        if (!p) {
            console.error('No graphics in SketchStore', SketchStore.mainGraphic);
            return;
        }
        const location =
            opt_location || p.createVector(p.random(p.width), p.random(p.height));
        this.buddies.push(new Buddy(p, location));
    }

    doTheThing() {
        this.buddies.forEach((buddy) => buddy.draw(this.buddies));
        this.buddies = this.buddies.filter((buddy) => buddy.alive);
        this.clearSomeOfTheBuddies();
        this.makeAllTheBuddies();
    }
}
