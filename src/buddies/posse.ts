import { Vector } from 'p5';
import { Buddy } from './buddy';
import { Egg } from './Egg';

import GameStore from 'src/store/game_store';
import SketchStore from 'src/store/sketch_store';
import { partition } from 'src/helpers/partition';
import StatsStore from 'src/store/stats_store';
import buddy_store from 'src/store/buddy_store';
import { Plant } from './Plant';

export class Posse {
  buddies: Buddy[] = [];
  eggs: Egg[] = [];
  plants: Plant[] = [];

  get maxBuddies() {
    return GameStore.maxBuddies;
  }

  clearSomeOfTheBuddies() {
    while (this.buddies.length > this.maxBuddies) {
      this.buddies.shift();
    }
  }

  killEverything() {
    // 😢
    // TODO trigger death properly.
    this.buddies = [];
    this.eggs = [];
    this.plants = [];
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
      this.eggs.push(
        new Egg(p, opt_location, p.color(buddy_store.focusedColor.color))
      );
      return;
    }
  }
  
  plantSeed(opt_location?: Vector) {
    const p = SketchStore.mainSketch;
    if (!p) {
      console.error('No Main Sketch in SketchStore', SketchStore.mainSketch);
      return;
    }
    if (opt_location) {
      this.plants.push(
        new Plant(p, opt_location, p.color(buddy_store.focusedColor.color))
      );
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
    const actualEgg = this.findEggToHatch();
    if (!actualEgg) {
      return;
    }
    this.buddies.push(actualEgg.hatch(p));
  }

  private findEggToHatch(): Egg | undefined {
    if (this.eggs.length === 0) {
      return undefined;
    }
    const eggToHatch = this.eggs.findIndex((egg) => egg.ready);

    if (eggToHatch < 0) {
      return undefined;
    }
    return this.eggs.splice(eggToHatch, 1)[0];
  }

  doTheThing() {
    this.updateThings();

    this.checkEggspiration();

    this.cleanupHibernateHatch();
  }

  private cleanupHibernateHatch() {
    const [living, dead] = partition(this.buddies, (buddy) => !buddy.allDone);
    this.buddies = living;
    this.eggs = [...this.eggs, ...dead.map((b) => b.toEgg())];
    this.makeAllTheBuddies();
  }

  private checkEggspiration() {
    const initialEggs = this.eggs.length;
    this.eggs = this.eggs.filter((egg) => !egg.expired);
    const howManyExpired = initialEggs - this.eggs.length;
    for (let i = 0; i < howManyExpired; i++) {
      StatsStore.uhOhEggWentBad();
    }
  }

  private updateThings() {
    this.buddies.forEach((buddy) => {
      buddy.update(this);
      buddy.draw();
    });
    this.eggs.forEach((egg) => {
      egg.update();
      egg.draw();
    });
    this.plants.forEach((plant) => {
      plant.update();
      plant.draw();
    });
  }
}
