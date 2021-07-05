<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <q-btn round flat to="/" icon="fa fa-object-group"></q-btn>
        <q-btn round flat to="/buddies" icon="fa fa-splotch"></q-btn>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header>
          <q-btn
            flat
            dense
            round
            icon="close"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition name="fade slide" mode="out-in">
          <keep-alive>
            <component :is="Component"></component>
          </keep-alive>
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev',
  },
];

import { Vue, Options } from 'vue-class-component';

@Options({
  components: { EssentialLink },
})
export default class MainLayout extends Vue {
  leftDrawerOpen = false;
  essentialLinks = linksList;
  toggleLeftDrawer() {
    this.leftDrawerOpen = !this.leftDrawerOpen;
  }
}
</script>

<style lang="scss">
.q-page-container {
  overflow: hidden;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.1s, opacity 0.1s;
}
.slide-enter-from {
  opacity: 0;
  transform: translateX(50%);
}

.slide-enter-to {
  transform: translateX(0);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-50%);
}
</style>
