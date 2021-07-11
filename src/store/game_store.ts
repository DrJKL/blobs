/* eslint-disable @typescript-eslint/require-await */
// import { VuexModule, Module, Mutation, Action } from 'vuex-class-modules';
import {
    VuexModule,
    Module,
    Mutation,
    Action,
    getModule,
} from 'vuex-module-decorators';
import { storeInstance } from '.';

const name = 'gamestore';

if (storeInstance.hasModule(name)) {
    storeInstance.unregisterModule(name);
}

@Module({
    name,
    store: storeInstance,
    dynamic: true,
    namespaced: true,
})
export class GameStoreModule extends VuexModule {
  // state
    public maxBuddies = 2;
    public fogValue = 1;
    private readonly MAX_FOG_VALUE = 10;
    private readonly MAX_MAX_BUDDIES = 50;

    @Mutation
    public setMaxBuddies(newMax: number) {
      this.maxBuddies = Math.max(0, Math.min(newMax, this.MAX_MAX_BUDDIES));
  }

    @Mutation
    public setFogValue(newValue: number) {
      this.fogValue = Math.max(0, Math.min(newValue, this.MAX_FOG_VALUE));
  }

    @Mutation
    public alterFog(fogDelta: number) {
        this.fogValue += fogDelta;
    }

    @Action
    public isItGettingDarker() {
        this.alterFog(+1);
  }

    @Action
    public iThinkItsClearingUp() {
        this.alterFog(-1);
  }
}

export default getModule(GameStoreModule);
