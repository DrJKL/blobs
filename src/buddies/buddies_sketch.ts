import { Posse } from './posse';
import p5, { Graphics } from 'p5';

import GameStore from 'src/store/game_store';
import SketchStore from 'src/store/sketch_store';
import buddy_store from 'src/store/buddy_store';

export const buddiesSketch = (posse?: Posse) => (p: p5) => {
  let backgroundGraphic: Graphics | undefined;
  let resources: Graphics | undefined;
  let mainGraphics: Graphics | undefined;
  let overlay: Graphics | undefined;
  let debugOverlay: Graphics | undefined;
  const WIDTH = 600;
  const HEIGHT = 600;
  p.setup = () => {
    p.createCanvas(WIDTH, HEIGHT);
    p.frameRate(144);
    p.noCursor();
    SketchStore.initP(p);

    mainGraphics = makeGraphic();
    SketchStore.initGraphics(mainGraphics);

    backgroundGraphic = makeGraphic();
    backgroundGraphic.background(0);
    SketchStore.initBackground(backgroundGraphic);

    resources = makeGraphic();
    SketchStore.initResources(resources);

    overlay = makeGraphic();
    SketchStore.initOverlay(overlay);

    debugOverlay = makeGraphic();
    SketchStore.initDebugOverlay(debugOverlay);

    if (!posse) {
      posse = new Posse();
    }
  };

  function makeGraphic() {
    const newGraphic = p.createGraphics(WIDTH, HEIGHT);
    newGraphic.colorMode(p.HSB, 360, 100, 100, 1);
    return newGraphic;
  }

  function getGraphics() {
    return [backgroundGraphic, resources, mainGraphics, overlay];
  }

  function handleFog() {
    if (!mainGraphics) {
      return;
    }
    const fogValue = GameStore.fogValue;
    if (fogValue === 10) {
      mainGraphics.background(mainGraphics.color(0, 0, 0, 1));
      mainGraphics.clear();
      return;
    }
    const backgroundFog = mainGraphics.color(0, 0, 0, fogValue * 0.05);
    mainGraphics.background(backgroundFog);
  }

  p.draw = () => {
    debugOverlay?.clear();
    handleFog();
    posse?.doTheThing();
    if (overlay) {
      overlay.clear();
      drawMouseTarget();
    }
    drawLayers();
  };
  function drawMouseTarget() {
    if (!overlay) {
      return;
    }
    overlay.push();
    overlay.stroke(0, 0, 100, 0.8);
    overlay.strokeWeight(1);
    overlay.noFill();
    overlay.circle(p.mouseX, p.mouseY, 20);
    overlay.fill(p.color(buddy_store.focusedColor.color));
    overlay.circle(p.mouseX, p.mouseY, 10);
    overlay.pop();
  }

  function drawLayers() {
    getGraphics()
      .filter((g): g is Graphics => g !== undefined)
      .forEach((graphic) => {
        p.image(graphic, 0, 0);
      });
    if (SketchStore.debugOn && debugOverlay) {
      // Do separately to respect debugOn
      p.image(debugOverlay, 0, 0);
    }
  }

  p.keyPressed = () => {
    if (p.key === ' ') {
      mainGraphics?.background(mainGraphics.color(0, 0, 0, 1));
    }
  };

  // Click
  p.mousePressed = (event: MouseEvent) => {
    event.preventDefault();
    if (
      p.mouseX > 0 &&
      p.mouseX < p.width &&
      p.mouseY > 0 &&
      p.mouseY < p.height
    ) {
      switch (event.button) {
        case 0:
          posse?.layEgg(p.createVector(p.mouseX, p.mouseY));
          break;
        case 2:
          posse?.plantSeed(p.createVector(p.mouseX, p.mouseY));
          break;
      }
    }
    return false;
  };
};
