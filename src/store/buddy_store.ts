import {
  VuexModule,
  Module,
  Mutation,
  getModule,
} from 'vuex-module-decorators';
import { storeInstance } from './index';

const name = 'buddystore';

if (storeInstance.hasModule(name)) {
  storeInstance.unregisterModule(name);
}

@Module({
  name,
  store: storeInstance,
  dynamic: true,
  namespaced: true,
})
export class BuddyStoreModule extends VuexModule {
  // state
  public ageLimit = 300;
  public colorRange = [0, 90];

  @Mutation
  public setAgeLimit(newMax: number) {
    this.ageLimit = Math.max(0, newMax);
  }

}

export default getModule(BuddyStoreModule);
