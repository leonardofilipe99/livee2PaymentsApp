<template>
  <q-page
    flex
    scroll="no"
    q-pa-lg
    items-center
    windows-height
    class="q-pa-lg text-center justify-center"
  >
    <div class="text-center">Dados registados</div>

    <q-field
      class="q-mt-lg"
      outlined
      readonly
      v-model="name"
      color="secondary"
    >
      <template v-slot:control>
        <div class="self-center text-grey full-width no-outline">
          {{ name }}
        </div>
      </template>
    </q-field>

    <q-field
      class="q-mt-lg"
      outlined
      readonly
      v-model="contacto"
      color="secondary"
    >
      <template v-slot:control>
        <div class="self-center text-grey full-width no-outline">
          {{ contacto }}
        </div>
      </template>
    </q-field>

    <div class="q-pa-all">
      <q-btn
        rounded
        icon="home"
        class="q-mt-lg full-width"
        to="/home"
        color="primary"
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
      name: "Andréa Massamba",
      contacto: "841234567",
    };
  },
};
</script>

<style>
</style>
