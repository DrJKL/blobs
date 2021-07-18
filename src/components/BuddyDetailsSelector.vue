<template>
  <div class="q-pa-md row q-gutter-sm justify-between items-center">
    <q-btn
      v-for="(b, index) of colors"
      :key="b"
      :color="b.color"
      :icon="toIcon(b)"
      :disable="index !== focused"
      round
      push
      size="lg"
      @click="clickColor(b)"
    />
  </div>
</template>
<script lang="ts">
import { Subscription, timer } from 'rxjs';
import { Options, Vue } from 'vue-class-component';

interface ColorAnimal {
  color: string;
  animal: string;
}

@Options({
  name: 'Buddy Details Selector',
})
export default class BuddyDetailsSelector extends Vue {
  colors: ColorAnimal[] = [
    {
      color: 'red',
      animal: 'crow',
    },
    {
      color: 'orange',
      animal: 'dove',
    },
    {
      color: 'yellow',
      animal: 'dragon',
    },
    {
      color: 'green',
      animal: 'kiwi-bird',
    },
    {
      color: 'blue',
      animal: 'hippo',
    },
    {
      color: 'purple',
      animal: 'otter',
    },
  ];

  focused = 0;
  march?: Subscription;

  mounted() {
    this.march = timer(0, 1000).subscribe((i) => {
      this.focused++;
      this.focused %= this.colors.length;
    });
  }
  unmounted() {
    this.march?.unsubscribe();
  }

  toIcon(b: ColorAnimal) {
    return `fa fa-${b.animal}`;
  }

  clickColor(b: ColorAnimal) {
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
