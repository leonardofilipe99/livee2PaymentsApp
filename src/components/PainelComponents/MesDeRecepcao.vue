<template>
  <div :v-if="visualizar">
    <div style="margin-top: 20px">
      "Janeiro", "Fevereiro", "Março ", "Abril", "Maio", "Junho", "Julho",
      "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
    </div>
  </div>
</template>

<script>

export default {
  props: {visualizar: String
  },
  components: {
  },
  data() {},
  methods: {
    onSubmit() {},
  },
};
</script>
