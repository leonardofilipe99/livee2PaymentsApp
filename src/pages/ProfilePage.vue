<template>
  <q-page
    class="bg-light window-height window-width q-pa-lg justify-center items-center"
  >
    <div class="text-center">Dados registados</div>
    <q-field
      class="q-mt-lg"
      outlined
      readonly
      v-model="email"
      color="secondary"
    >
      <template v-slot:control>
        <div class="self-center text-grey full-width no-outline">
          {{ email }}
        </div>
      </template>
    </q-field>

    <div class="q-pa-all">
      <q-btn
        rounded
        icon="home"
        class="q-mt-lg full-width"
        to="/home"
        color="secondary"
        label="Pagina Inicial"
      />
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
export default {
  name: "ProfilePage",
  data() {
    return {
      email: "explicadorinc@gmail.com",
    };
  },
};
</script>

<style>
</style>
