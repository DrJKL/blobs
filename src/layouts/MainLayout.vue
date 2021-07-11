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

        <q-toolbar-title> Blob Friends </q-toolbar-title>

        <q-tabs>
          <q-route-tab icon="fa fa-object-group" to="/art-i-guess" exact>
            <q-tooltip>Art, but Modern or something</q-tooltip>
          </q-route-tab>
          <q-route-tab icon="fa fa-splotch" to="/" exact>
            <q-tooltip>The Buddies!</q-tooltip>
          </q-route-tab>
        </q-tabs>
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
          Menu
        </q-item-label>

        <q-item
          ><q-btn type="a" target="_blank" href="http://github.com/drjkl/blobs"
            >Nothing to see here...</q-btn
          ></q-item
        >
      </q-list>
    </q-drawer>

    <q-page-container class="ummmmmm">
      <router-view v-slot="{ Component }">
        <transition name="slide">
          <keep-alive>
            <component :is="Component"></component>
          </keep-alive>
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

@Options({
  components: {},
})
export default class MainLayout extends Vue {
  leftDrawerOpen = false;
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
  transition: transform 0.4s, opacity 0.1s;
}
.slide-enter-from {
  opacity: 0;
  transform: translateX(50%) scale(0.5);
}

.slide-enter-to {
  transform: translateX(0);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-50%) scale(0.5);
}

.ummmmmm {
  display: grid;
  grid-template: 1fr / 1fr;
}
</style>
