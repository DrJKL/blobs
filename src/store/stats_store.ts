import {
  VuexModule,
  Module,
  Mutation,
  getModule,
} from 'vuex-module-decorators';
import { storeInstance } from './index';

const name = 'statsstore';

if (storeInstance.hasModule(name)) {
  storeInstance.unregisterModule(name);
}

@Module({
  name,
  store: storeInstance,
  dynamic: true,
  namespaced: true,
})
export class StatsStoreModule extends VuexModule {
  // state
  public eggsHatched = 0;
  public eggsExpired = 0;

  @Mutation
  public addEgg() {
    this.eggsHatched++;
  }

  @Mutation
  public uhOhEggWentBad() {
    this.eggsExpired++;
  }
}

export default getModule(StatsStoreModule);
