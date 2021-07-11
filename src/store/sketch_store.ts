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
  public mainGraphic: Graphics | null = null;
  public overlayGraphic: Graphics | null = null;
  public debugGraphic: Graphics | null = null;
  public debugOn = false;
  public frameRate = 144;

  @Mutation
  public initP(newP: p5) {
    this.mainSketch = newP;
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
  @Mutation
  public step() {
    this.mainSketch?.redraw();
  }

  get playing() {
    return this.mainSketch?.isLooping() || false;
  }

  @Mutation
  public clearScreen() {
    // this.mainSketch?.clear();
    this.mainGraphic?.clear();
    this.mainGraphic?.background(0);
  }

  get isDebug() {
    return this.debugOn;
  }

  @Action
  public toggleDebug() {
    this.setDebug(!this.debugOn);
  }
}

export default getModule(SketchStoreModule);
