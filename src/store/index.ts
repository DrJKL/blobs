import { store } from 'quasar/wrappers'
import { InjectionKey } from 'vue'
import {
  createStore,
  Store,
  Store as VuexStore,
  useStore as vuexUseStore,
} from 'vuex'

// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<unknown>
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<unknown>> = Symbol('vuex-key')

export let storeInstance: Store<unknown>;

export default store(function (/* { ssrContext } */) {
  const store = createStore({
    modules: {
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: !!process.env.DEBUGGING
  });
  storeInstance = store;

  return store;
})

export function useStore() {
  return vuexUseStore(storeKey)
}