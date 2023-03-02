<template>
  <q-page
    flex
    scroll="no"
    q-pa-md
    items-center
    windows-height
    class="q-pa-lg text-center justify-center"
  >
    <div class="flex column justify-center">
      <q-card
        style="
          background: radial-gradient(circle, #ef5350, #d40030);
          margin-bottom: 15px;
        "
      >
        <q-tabs v-model="tab" class="text-secondary">
          <q-tab
            @click="efectuar"
            text-color="white"
            name="mails"
            icon="payments"
            label="Efectuar xitique"
          />
          <q-tab
            @click="visualizar"
            name="alarms"
            icon="visibility"
            label="Visualizar xitiques feitos"
          />
          <q-tab
            @click="recepcao"
            name="movies"
            icon="update"
            label="Efectuar xitique"
          />
        </q-tabs>
      </q-card>

      <efectuar-xitique v-if="isEfectuar" />
      <visualizar-meses v-if="isVisualizar" />
      <mes-de-recepcao v-if="isRecepcao" />
    </div>
  </q-page>
</template>

<script>
import PainelOptions from "src/components/Generic/PainelOptions.vue";
import VisualizarMeses from "../components/PainelComponents/VisualizarMeses.vue";
import MesDeRecepcao from "../components/PainelComponents/MesDeRecepcao.vue";
import EfectuarXitique from "../components/PainelComponents/EfectuarXitique.vue";
import { ref } from "vue";

export default {
  components: {
    PainelOptions,
    EfectuarXitique,
    VisualizarMeses,
    MesDeRecepcao,
  },
  data() {
    return {
      tab: ref("mails"),
      isVisualizar: false,
      isRecepcao: false,
      isEfectuar: false,
      cor1: "primary",
      cor2: "primary",
      cor3: "primary",

      // Define a variável que controla a exibição do botão como verdadeira
    };
  },
  methods: {
    efectuar() {
      this.isEfectuar = true;
      this.isRecepcao = false;
      this.isVisualizar = false;
      this.cor1 = "secondary";
      this.cor2 = "primary";
      this.cor3 = "primary";
    },
    visualizar() {
      this.isVisualizar = true;
      this.isRecepcao = false;
      this.isEfectuar = false;
      this.cor1 = "primary";
      this.cor2 = "secondary";
      this.cor3 = "primary";
    },
    recepcao() {
      this.isRecepcao = true;
      this.isVisualizar = false;
      this.isEfectuar = false;
      this.cor1 = "primary";
      this.cor2 = "primary";
      this.cor3 = "secondary";
    },
  },
};
</script>
