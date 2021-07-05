/* eslint-disable @typescript-eslint/require-await */
// import { VuexModule, Module, Mutation, Action } from 'vuex-class-modules';
import {
    VuexModule,
    Module,
    Mutation,
    Action,
    getModule,
} from 'vuex-module-decorators';
import { storeInstance } from '..';

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

    @Mutation
    public setMaxBuddies(newMax: number) {
        this.maxBuddies = newMax;
    }

    @Mutation
    public setFogValue(newValue: number) {
        this.fogValue = newValue;
    }

    @Mutation
    public alterFog(fogDelta: number) {
        this.fogValue += fogDelta;
    }

    @Mutation
    public constrainFogValue() {
        const initialFog = this.fogValue;
        const clampedFog = Math.max(0, Math.min(initialFog, this.MAX_FOG_VALUE));
        const roundedFog = parseFloat(clampedFog.toFixed(2));
        this.fogValue = roundedFog;
    }

    @Action
    public isItGettingDarker() {
        this.alterFog(+1);
        this.constrainFogValue();
    }

    @Action
    public iThinkItsClearingUp() {
        this.alterFog(-1);
        this.constrainFogValue();
    }
}

export default getModule(GameStoreModule);
