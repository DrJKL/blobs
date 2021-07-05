/* eslint-disable @typescript-eslint/require-await */
import { VuexModule, Module, Mutation, Action } from 'vuex-class-modules';
import { modulesStore } from '..';

@Module({ generateMutationSetters: true })
export class GameStoreModule extends VuexModule {
    // state
    private _maxBuddies = 2;
    private _fogValue = 0.05;
    private readonly MAX_FOG_VALUE = 1;

    get maxBuddies(): number {
        return this._maxBuddies;
    }

    get fogValue(): number {
        return this._fogValue;
    }

    @Mutation
    public setMaxBuddies(newMax: number) {
        this._maxBuddies = newMax;
    }

    @Mutation
    public constrainFogValue() {
        const initialFog = this._fogValue;
        const clampedFog = Math.max(0, Math.min(initialFog, this.MAX_FOG_VALUE));
        const roundedFog = parseFloat(clampedFog.toFixed(2));
        this._fogValue = roundedFog;
    }

    @Action
    public isItGettingDarker() {
        this._fogValue += 0.05;
        this.constrainFogValue();
    }

    @Action
    public iThinkItsClearingUp() {
        this._fogValue -= 0.05;
        this.constrainFogValue();
    }
}

export default new GameStoreModule({ store: modulesStore, name: 'gamestore' });
