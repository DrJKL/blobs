import p5, { Graphics } from 'p5';
import { Action } from 'vuex-class';
import {
  VuexModule,
  Module,
  Mutation,
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
})
export class SketchStoreModule extends VuexModule {
  // state
  public mainSketch: p5 | null = null;
  public mainGraphic: Graphics | null = null;
  public overlayGraphic: Graphics | null = null;
  public debugGraphic: Graphics | null = null;
  public debugOn = false;

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

  get isDebug() {
    return this.debugOn;
  }

  @Action
  public toggleDebug() {
    this.setDebug(!this.debugOn);
  }
}

export default getModule(SketchStoreModule);

storeInstance.watch(
  () => getModule(SketchStoreModule, storeInstance).isDebug,
  (newV: boolean, old: boolean) => {
    console.log('debug changed', old, newV);
  }
);
