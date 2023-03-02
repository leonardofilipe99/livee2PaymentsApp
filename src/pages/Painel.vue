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

      <q-btn-group push style="margin-bottom: 15px">
        <q-btn
          :color="cor1"
          push
          label="Efectuar xitique"
          icon="payments"
          @click="efectuar"
        />
        <q-btn
          :color="cor2"
          push
          label="Visualizar xitiques feitos"
          icon="visibility"
          @click="visualizar"
        />
        <q-btn
          :color="cor3"
          push
          label="Mês de recepção de xitique"
          icon="update"
          @click="recepcao"
        />
      </q-btn-group>

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
import EfectuarXitique from "../components/PainelComponents/EfectuarXitique.vue"

export default {
  components: { PainelOptions, EfectuarXitique, VisualizarMeses, MesDeRecepcao },
  data() {
    return {
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
      this.isRecepcao = false
      this.isVisualizar = false
      this.cor1 = "secondary";
      this.cor2 = "primary";
      this.cor3 = "primary";
    },
    visualizar() {
      this.isVisualizar = true;
      this.isRecepcao = false
      this.isEfectuar = false
      this.cor1 = "primary";
      this.cor2 = "secondary";
      this.cor3 = "primary";
    },
    recepcao() {
      this.isRecepcao = true;
      this.isVisualizar = false
      this.isEfectuar = false
      this.cor1 = "primary";
      this.cor2 = "primary";
      this.cor3 = "secondary";
    },
  },
};
</script>
