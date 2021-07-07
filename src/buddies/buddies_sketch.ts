import { Posse } from './posse';
import p5, { Graphics } from 'p5';

import GameStore from 'src/store/game_store';
import SketchStore from 'src/store/sketch_store';

export const buddiesSketch = (p: p5) => {
    const mouse = p.createVector();
    let posse: Posse | undefined;
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

        mainGraphics = p.createGraphics(WIDTH, HEIGHT);
        mainGraphics.colorMode(p.HSB, 360, 100, 100, 1);
        SketchStore.initGraphics(mainGraphics);

        overlay = p.createGraphics(WIDTH, HEIGHT);
        overlay.colorMode(p.HSB, 360, 100, 100, 1);
        SketchStore.initOverlay(overlay);

        debugOverlay = p.createGraphics(WIDTH, HEIGHT);
        debugOverlay.colorMode(p.HSB, 360, 100, 100, 1);
        SketchStore.initDebugOverlay(debugOverlay);

        posse = new Posse();
    };

    function handleFog() {
        if (!mainGraphics) {
            return;
        }
        const fogValue = GameStore.fogValue;
        if (fogValue === 10) {
            mainGraphics.background(mainGraphics.color(0, 0, 0, 1));
            return;
        }
        const backgroundFog = mainGraphics.color(0, 0, 0, fogValue * 0.05);
        mainGraphics.background(backgroundFog);
    }

    p.draw = () => {
        mouse.x = p.mouseX;
        mouse.y = p.mouseY;
        handleFog();
        debugOverlay?.clear();
        overlay?.clear();
        posse?.doTheThing();
        if (overlay) {
            drawMouseTarget(overlay, mouse);
        }
        const posseGraphics = SketchStore.mainGraphic;
        if (posseGraphics) {
            p.image(posseGraphics, 0, 0);
        }
        if (overlay) {
            p.image(overlay, 0, 0);
        }
        if (SketchStore.debugOn && debugOverlay) {
            p.image(debugOverlay, 0, 0);
        }
    };

    p.keyPressed = () => {
        if (p.key === ' ') {
            mainGraphics?.background(mainGraphics.color(0, 0, 0, 1));
        }
    };

    p.mousePressed = (event: MouseEvent) => {
        console.log(event);
        event.preventDefault();
        if (
            p.mouseX > 0 &&
            p.mouseX < p.width &&
            p.mouseY > 0 &&
            p.mouseY < p.height
        ) {
            posse?.addNewBuddy(p.createVector(p.mouseX, p.mouseY));
        }
        return false;
    };
};
function drawMouseTarget(overlay: p5.Graphics, mouse: p5.Vector) {
    overlay.stroke(0, 0, 100, 0.8);
    overlay.strokeWeight(1);
    overlay.noFill();
    overlay.circle(mouse.x, mouse.y, 20);
    overlay.circle(mouse.x, mouse.y, 10);
}
