<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="primary">
        <q-btn
          flat
          dense
          round
          color="secondary"
          icon="menu"
          aria-label="Menu"
          @click="isDrawerOpen = !isDrawerOpen"
        />

        <q-toolbar-title class="text-secondary" style="font-size: medium">
          Bem-vinda Andréa!
        </q-toolbar-title>

        <div class="text-secondary" style="font-size: small">
          <i>Xitique-Construa</i>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="isDrawerOpen"
      show-if-above
      :width="300"
      :breakpoint="400"
    >
    <menu-component />

      <q-img
        class="absolute-top"
        src="https://explicador.co.mz/wp-content/uploads/2021/07/lagos-techie-IgUR1iX0mqM-unsplash-1-scaled.jpg"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img
              src="https://www.olabeira.com/custom/domain_1/image_files/sitemgr_photo_3261.png"
            />
          </q-avatar>
          <div class="text-weight-bold">Andréa Massamba</div>
          <div>andrea.massamba@construa.co.mz</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import MenuComponent from '../components/layout/MenuComponent.vue';

export default {
  name: "MainLayout",
  components: {
    MenuComponent
  },
  data() {
    return {
      isDrawerOpen: false,
    };
  },
};
</script>
