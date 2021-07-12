import { Buddy, Egg } from 'src/buddies/buddy';
import {
    VuexModule,
    Module,
    Mutation,
    getModule,
} from 'vuex-module-decorators';
import { storeInstance } from './index';

const name = 'possestore';

if (storeInstance.hasModule(name)) {
    storeInstance.unregisterModule(name);
}

@Module({
    name,
    store: storeInstance,
    dynamic: true,
    namespaced: true,
})
export class PosseStoreModule extends VuexModule {
    // state  
    public buddies: Buddy[] = [];
    public eggs: Egg[] = [];

    @Mutation
    public addBuddy(buddy: Buddy) {
        this.buddies.push(buddy);
    }

    public addEgg(egg: Egg) {
        this.eggs.push(egg);
    }

}

export default getModule(PosseStoreModule);
