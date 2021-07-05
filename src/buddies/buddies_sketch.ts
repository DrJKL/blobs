import { Posse } from './posse';
import p5 from 'p5';

import GameStore from 'src/store/game_store';

export const buddiesSketch = (p: p5) => {
    const mouse = p.createVector();
    const posse = new Posse(p);
    p.setup = () => {
        p.createCanvas(600, 600);
        p.colorMode(p.HSB, 360, 100, 100, 1);
        p.background(0, 0, 100);
        // makeControls();
        // statBlock = document.querySelector('pre');
    };

    function handleFog() {
        const fogValue = GameStore.fogValue;
        if (fogValue === 10) {
            p.background(p.color(0, 0, 0, 1));
            return;
        }
        const backgroundFog = p.color(0, 0, 0, fogValue * 0.05);
        p.background(backgroundFog);
    }

    p.draw = () => {
        mouse.x = p.mouseX;
        mouse.y = p.mouseY;
        handleFog();
        posse.doTheThing();
        // statBlock.innerHTML = JSON.stringify({
        //     ...state,
        //     frameCount
        // }, undefined, 1);
        if (p.mouseIsPressed) {
            p.stroke(0, 0, 100, 0.8);
            p.strokeWeight(1);
            p.noFill();
            p.circle(mouse.x, mouse.y, 20);
        }
    };

    p.keyPressed = () => {
        if (p.keyCode === 32) {
            p.background(0);
        }
    };

    p.mouseClicked = () => {
        if (
            p.mouseX > 0 &&
            p.mouseX < p.width &&
            p.mouseY > 0 &&
            p.mouseY < p.height
        ) {
            posse.addNewBuddy(p.createVector(p.mouseX, p.mouseY));
        }
    };
};
