import p5, { Graphics } from 'p5';
import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule,
} from 'vuex-module-decorators';
import { storeInstance } from './index';

const name = 'sketchstore';

if (storeInstance.hasModule(name)) {
  storeInstance.unregisterModule(name);
}

@Module({
  name,
  store: storeInstance,
  dynamic: true,
  namespaced: true,
  stateFactory: true,
})
export class SketchStoreModule extends VuexModule {
  // state
  public mainSketch: p5 | null = null;
  public backgroundGraphic: Graphics | null = null;
  public resourceGraphic: Graphics | null = null;
  public mainGraphic: Graphics | null = null;
  public overlayGraphic: Graphics | null = null;
  public debugGraphic: Graphics | null = null;

  public debugOn = false;
  public frameRate = 144;

  get isDebug() {
    return this.debugOn;
  }

  get playing() {
    return this.mainSketch?.isLooping() || false;
  }

  @Mutation
  public initP(newP: p5) {
    this.mainSketch = newP;
  }
  @Mutation
  public initBackground(newP: Graphics) {
    this.backgroundGraphic = newP;
  }
  @Mutation
  public initResources(newP: Graphics) {
    this.resourceGraphic = newP;
  }
  @Mutation
  public initGraphics(newP: Graphics) {
    this.mainGraphic = newP;
  }
  @Mutation
  public initOverlay(newP: Graphics) {
    this.overlayGraphic = newP;
  }
  @Mutation
  public initDebugOverlay(newP: Graphics) {
    this.debugGraphic = newP;
  }
  @Mutation
  public setDebug(debug: boolean) {
    this.debugOn = debug;
  }

  @Mutation
  public setFrameRate(frameRate: number) {
    this.frameRate = frameRate;
    this.mainSketch?.frameRate(frameRate);
  }

  @Mutation
  public play() {
    this.mainSketch?.loop();
  }
  @Mutation
  public pause() {
    this.mainSketch?.noLoop();
  }

  @Mutation
  public step() {
    this.mainSketch?.redraw();
  }

  @Mutation
  public clearScreen() {
    this.mainGraphic?.clear();
    this.mainGraphic?.background(0);
    this.resourceGraphic?.clear();
    this.resourceGraphic?.background(0);
  }
  
  @Action
  public togglePlayState() {
    if (this.playing) {
      this.pause();
    } else {
      this.play();
    }
  }

  @Action
  public setLoopState(toLoop: boolean) {
    if (toLoop) {
      this.play();
    } else {
      this.pause();
    }
  }
  @Action
  public toggleDebug() {
    this.setDebug(!this.debugOn);
  }
}

export default getModule(SketchStoreModule);
