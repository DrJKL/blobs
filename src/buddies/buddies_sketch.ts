import { Posse } from './posse';
import p5, { Graphics } from 'p5';

import GameStore from 'src/store/game_store';

export const buddiesSketch = (p: p5) => {
    const mouse = p.createVector();
    let posse: Posse | undefined;
    let mainGraphics: Graphics | undefined;
    let overlay: Graphics | undefined;
    const WIDTH = 600;
    const HEIGHT = 600;
    p.setup = () => {
        p.createCanvas(WIDTH, HEIGHT);
        mainGraphics = p.createGraphics(WIDTH, HEIGHT);
        mainGraphics.colorMode(p.HSB, 360, 100, 100, 1);
        overlay = p.createGraphics(WIDTH, HEIGHT);
        overlay.colorMode(p.HSB, 360, 100, 100, 1);
        posse = new Posse(mainGraphics);
    };

    function handleFog() {
        if (!mainGraphics) { return; }
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
        posse?.doTheThing();
        overlay?.clear();
        if (overlay && p.mouseIsPressed) {
            overlay.stroke(0, 0, 100, 0.8);
            overlay.strokeWeight(1);
            overlay.noFill();
            overlay.circle(mouse.x, mouse.y, 20);
            overlay.circle(mouse.x, mouse.y, 10);
            p.noCursor();
        }
        const posseGraphics = posse?.p;
        if (posseGraphics)
            p.image(posseGraphics, 0, 0);
        if (overlay)
            p.image(overlay, 0, 0, WIDTH, HEIGHT);
    };

    p.keyPressed = () => {
        if (p.key === ' ') {
            mainGraphics?.background(mainGraphics.color(0, 0, 0, 1));
        }
    };

    p.mouseClicked = () => {
        if (
            p.mouseX > 0 &&
            p.mouseX < p.width &&
            p.mouseY > 0 &&
            p.mouseY < p.height
        ) {
            posse?.addNewBuddy(p.createVector(p.mouseX, p.mouseY));
        }
    };
};
