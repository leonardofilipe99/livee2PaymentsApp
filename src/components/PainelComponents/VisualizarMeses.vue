<template>
  <div :v-if="visualizar">
    Este serviço vem para facilitar ainda mais a vida dos Clientes pois responde
    a uma necessidade de modernizar a forma de fazer Xitique e de guardar
    dinheiro de uma forma fácil, rápida e segura para uso a posterior. Com o
    dinheiro guardado no Xitique podes comprar novos móveis ou
    electrodomésticos, terminar ou melhorar a casa, ou ainda, juntar dinheiro
    para pagar facturas de água, Credelec, mensalidades entre outros serviços
    disponível no menu M-Pesa.
  </div>
</template>

<script>
import PainelOptions from "src/components/Generic/PainelOptions.vue";
export default {
  props: {
    visualizar: String,
  },
  components: {
    PainelOptions,
  },
  data() {},
  methods: {
    onSubmit() {},
  },
};
</script>
