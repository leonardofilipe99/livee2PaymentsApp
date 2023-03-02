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
          <OptionComponent title="Inicio" iconName="home" link="/home" />
          <OptionComponent
            title="Entrar"
            iconName="login"
            link="/login"
            v-if="canShowLogin"
          />
          <OptionComponent
            title="Registar"
            iconName="edit_note"
            link="/signup"
            v-if="canShowLogin"
          />
          <OptionComponent
            title="Perfil"
            iconName="person"
            link="/profile"
            v-if="canShowProfile"
          />
          <OptionComponent title="Ajuda" iconName="help" link="/help" />

          <OptionComponent
            title="Sair"
            iconName="power_settings_new"
            @click="confirm"
          />
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
import { useQuasar  } from "quasar";
import OptionComponent from "src/components/layout/OptionComponent.vue";
import { useRoute,useRouter } from "vue-router";
import { computed } from "vue";

export default {
  components: {
    OptionComponent,
  },
  setup() {
    const route = useRoute();

    const $q = useQuasar();

    const $router = useRouter();


    const confirm = () => {
      $q.dialog({
        title: "Sair?",
        ok: {
          push: true,
          color: "secondary",
        },
        message: "Tem certeza que deseja sair?",
        cancel: { push: true, color: "primary" },
        persistent: true,
      })
        .onOk(() => {
          $router.push('/');
        })
        .onCancel(() => {})
        .onDismiss(() => {});
    };

    const canShowProfile = computed(() => {
      const isPainelPage = route.fullPath === "/painel";
      const isProfilePage = route.fullPath === "/profile";
      return isPainelPage || isProfilePage;
    });

    const canShowLogin = computed(() => {
      const isPainelPage = route.fullPath === "/painel";
      const isProfilePage = route.fullPath === "/profile";
      return !(isPainelPage || isProfilePage);
    });

    return {
      isDrawerOpen: false,
      canShowProfile,
      canShowLogin,
      confirm
    };
  },
};
</script>
