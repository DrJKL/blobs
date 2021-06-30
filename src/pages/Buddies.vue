<template>
  <q-page class="row items-center justify-evenly">
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
