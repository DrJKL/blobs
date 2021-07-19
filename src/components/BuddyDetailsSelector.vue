<template>
  <div class="q-pa-md row q-gutter-sm justify-between items-center">
    <q-btn
      v-for="(b, index) of colors"
      :key="b"
      :color="b.color"
      :icon="toIcon(b)"
      :glossy="index === focused"
      :outline="index !== focused"
      :disable="marching"
      round
      push
      size="lg"
      @click="clickColor(b)"
    />
  </div>
  <div>
    <q-toggle v-model="marching" icon="fa fa-tachometer-alt" />
  </div>
</template>
<script lang="ts">
import { Subscription, timer } from 'rxjs';
import buddy_store, { ColorAnimal } from 'src/store/buddy_store';
import { Options, Vue } from 'vue-class-component';

@Options({
  name: 'Buddy Details Selector',
})
export default class BuddyDetailsSelector extends Vue {
  marchSub?: Subscription;
  marching = false;
  get colors() {
    return buddy_store.colors;
  }

  get focused() {
    return buddy_store.focused;
  }

  mounted() {
    this.marchSub = timer(0, 100).subscribe(() => {
      if (this.marching) {
        buddy_store.incrementFocus();
      }
    });
  }
  unmounted() {
    this.marchSub?.unsubscribe();
  }

  toIcon(b: ColorAnimal) {
    return `fa fa-${b.animal}`;
  }

  clickColor(b: ColorAnimal) {
    buddy_store.setFocus(b);
    console.log(`${JSON.stringify(b)} Clicked`);
  }
}
</script>
<style lang="scss" scoped>
.q-btn {
  :deep(.fa) {
    color: white;
    -webkit-text-stroke: 1px black;
  }
  &:not(:disabled) :deep(.q-btn__content) {
    mix-blend-mode: difference;
  }
  &:disabled :deep(.q-btn__content) {
    mix-blend-mode: multiply;
  }
}
</style>
