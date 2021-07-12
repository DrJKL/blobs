import { Vector } from 'p5';
import { Buddy, Egg } from './buddy';

import GameStore from 'src/store/game_store';
import SketchStore from 'src/store/sketch_store';

export class Posse {
    buddies: Buddy[] = [];
    eggs: Egg[] = [];

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

    layEgg(opt_location?: Vector) {
        const p = SketchStore.mainGraphic;
        if (!p) {
            console.error('No graphics in SketchStore', SketchStore.mainGraphic);
            return;
        }
        if (opt_location) {
            this.eggs.push(new Egg(p, opt_location));
            return;
        }
    }

    addNewBuddy(opt_location?: Vector) {
        const p = SketchStore.mainGraphic;
        if (!p) {
            console.error('No graphics in SketchStore', SketchStore.mainGraphic);
            return;
        }
        if (opt_location) {
            this.buddies.push(new Buddy(p, opt_location));
            return;
        }
        if (this.eggs.length === 0) {
            return;
        }
        const eggToHatch = this.eggs.findIndex((egg) => egg.ready);

        if (eggToHatch < 0) {
            return;
        }
        const actualEgg = this.eggs.splice(eggToHatch, 1)[0];

        this.buddies.push(actualEgg.hatch(p));
    }

    doTheThing() {
        this.buddies.forEach((buddy) => buddy.draw(this.buddies));
        this.eggs.forEach((egg) => egg.draw());
        const [living, dead] = partition(this.buddies, (buddy) => !buddy.allDone);
        this.buddies = living;
        this.eggs = [...this.eggs, ...dead.map((b) => b.toEgg())];
        this.clearSomeOfTheBuddies();
        this.makeAllTheBuddies();
    }
}

function partition<T>(arr: T[], predicate: (i: T) => boolean): [T[], T[]] {
    const pass: T[] = [];
    const fail: T[] = [];
    arr.forEach((value) => {
        if (predicate(value)) {
            pass.push(value);
        } else {
            fail.push(value);
        }
    });
    return [pass, fail];
}
