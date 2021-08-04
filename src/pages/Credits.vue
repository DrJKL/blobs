<template>
  <q-page class="row column items-center ummmm">
    <h1 class="row">Credits</h1>
    <section class="concept-art row column">
      <h2 class="row">Concept Art by Beth Martyn</h2>
      <div class="gallery row">
        <q-img
          v-for="image in images"
          :key="image"
          class="work-of-art"
          :src="image"
          :alt="getAltText()"
          fit="contain"
        />
      </div>
    </section>
  </q-page>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({
  name: 'Credits',
})
export default class Credits extends Vue {
  images: string[] = [];

  mounted() {
    this.images = [];
    for (let i = 0; i < 5; i++) {
      this.images.push(require(`../assets/concept-art/ca_${i}.jpg`) as string);
    }
  }
  getAltText() {
      return 'Wooooooowwwww';
  }
}
</script>
<style lang="scss" scoped>
.ummmm {
  grid-column: 1;
  grid-row: 1;
  padding-top: 10vh;
}

.concept-art {
    width: 90vw;
}

.gallery {
  display: flex;
  flex-direction: row;
  gap: 4px;
  .work-of-art {
      flex: 1;
      object-fit: contain;
      max-width: 30vw;
      box-sizing: border-box;
      border: 2px inset white
  }
}
</style>
