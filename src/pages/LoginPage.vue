<template>
  <q-page
    class="bg-light window-height window-width q-pa-lg justify-center items-center"
  >
    <q-input
      class="q-mt-lg"
      standout="bg-primary text-white"
      v-model="contacto"
      label="Contacto (8xxxxxxxx)"
      bottom-slots
      color="secondary"
      lazy-rules
      :rules="[
        (val) =>
          (val !== null && val !== '') || 'Por favor, preencha este campos',
        (val) =>
          (val > 0 && val.toString().length === 9) || 'Insira um numero válido',
      ]"
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

    <div class="q-pa-all">
      <q-btn
        class="q-mt-lg full-width"
        to="/painel"
        color="primary"
        label="Entrar"
      />
    </div>

    <div class="text-right">
      <q-btn flat color="grey-8" label="Criar conta" to="/signup" />
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
export default {
  name: "LoginPage",
  data() {
    return {
      contacto: "",
      password: "",
    };
  },
};
</script>

<style>
</style>
