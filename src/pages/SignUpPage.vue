<template>
  <q-page
    class="bg-light window-height window-width q-pa-lg justify-center items-center"
  >
    <q-input
      class="q-mt-lg"
      standout="bg-secondary text-white"
      v-model="contacto"
      label="Contacto (8xxxxxxxx)"
      color="red"
    />

    <q-input
      class="q-mt-lg"
      standout="bg-primary text-white"
      v-model="password"
      label="Senha"
      bottom-slots
      color="secondary"
      type="password"
    />

    <q-input
      class="q-mt-lg"
      standout="bg-primary text-white"
      v-model="confirmPassword"
      label="Confirmar senha"
      bottom-slots
      color="secondary"
      type="password"
    />

    <div class="q-pa-all">
      <q-btn
        class="q-mt-lg full-width"
        to="/login"
        color="primary"
        label="Registar-me"
      />
    </div>

    <div class="text-right">
      <q-btn flat color="grey-8" label="Entrar" to="/login" />
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
export default {
  name: "SignUpPage",
  data() {
    return {
      contacto: ref(""),
      password: ref(""),
	  confirmPassword: ref(""),

    };
  },
};
</script>

<style>
</style>
