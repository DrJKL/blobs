<template>
  <q-page class="row items-center justify-around ummmm">
    <buddies-component></buddies-component>
  </q-page>
</template>

<script lang="ts">
import BuddiesComponent from 'components/BuddiesComponent.vue';
import { Vue, Options } from 'vue-class-component'

@Options({
  components: { BuddiesComponent }
})
export default class PageIndex extends Vue {
  
  created() {
    // Do Nothing
  }
};
</script>

<style lang="scss" scoped>
.ummmm {
  grid-column: 1;
  grid-row: 1;
}
</style>