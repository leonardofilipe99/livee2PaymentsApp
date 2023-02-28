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
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item to="/painel" clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="red" name="home" />
            </q-item-section>
            <q-item-section> Inicio </q-item-section>
          </q-item>

          <q-item to="/login" clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="red" name="login" />
            </q-item-section>
            <q-item-section> Entrar </q-item-section>
          </q-item>

          <q-item to="/signup" clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="red" name="edit_note" />
            </q-item-section>

            <q-item-section> Registar </q-item-section>
          </q-item>

          <q-item to="/help" clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="red" name="help" />
            </q-item-section>

            <q-item-section> Ajuda </q-item-section>
          </q-item>

          <q-item to="/" clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="red" name="power_settings_new" />
            </q-item-section>

            <q-item-section> Sair </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>

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
export default {
  name: "MainLayout",
  data() {
    //https://www.olabeira.com/custom/domain_1/image_files/sitemgr_photo_3261.png
    return {
      isDrawerOpen: false,
    };
  },
};
</script>
