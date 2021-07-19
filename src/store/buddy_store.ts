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

export interface ColorAnimal {
  color: string;
  // colorCSS: string;
  animal: string;
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
  public focused = 0;


  public colors: ColorAnimal[] = [
    {
      color: 'red',
      animal: 'cat',
    },
    {
      color: 'orange',
      animal: 'crow',
    },
    {
      color: 'yellow',
      animal: 'dog',
    },
    {
      color: 'green',
      animal: 'dove',
    },
    {
      color: 'blue',
      animal: 'dragon',
    },
    {
      color: 'purple',
      animal: 'fish',
    },
    {
      color: 'cyan',
      animal: 'frog',
    },
    {
      color: 'grey',
      animal: 'hippo',
    },
    {
      color: 'brown',
      animal: 'horse',
    },
    {
      color: 'lime',
      animal: 'kiwi-bird',
    },
    {
      color: 'teal',
      animal: 'otter',
    },
    {
      color: 'indigo',
      animal: 'spider',
    },

  ];

  @Mutation
  public incrementFocus() {
    this.focused++;
    this.focused %= this.colors.length;
  }

  @Mutation
  public setFocus(b: ColorAnimal) {
    this.focused = this.colors.indexOf(b);
  }

  @Mutation
  public setAgeLimit(newMax: number) {
    this.ageLimit = Math.max(0, newMax);
  }

  get focusedColor() {
    return this.colors[this.focused];
  }

}

export default getModule(BuddyStoreModule);
