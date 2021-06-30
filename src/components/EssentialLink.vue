<template>
  <q-item clickable tag="a" target="_blank" :href="link">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({})
export default class EssentialLink extends Vue {
  @Prop(String) title!: string;
  @Prop({ default: '' }) caption!: string | undefined;
  @Prop({ default: '#' }) link!: string | undefined;
  @Prop({ default: '' }) icon!: string | undefined;
}
</script>
