<template>
  <q-page
    flex
    scroll="no"
    q-pa-lg
    items-center
    windows-height
    class="q-pa-xl text-center justify-center"
  >
    <div class="text-center">
      <q-img src="/construa.png" alt="" style="" />
    </div>
  </q-page>
</template>

<script>

export default {
  name: "HomePage",
  components: {

  },
  data() {
    return {
      payload: {
        amount: null,
        phone: null,
        reference: null,
      },
      options: [
        "Selecione",
        "Live",
        "TestarPagamento",
        "PagarCurso",
        "DoarValor",
      ],
    };
  },
  methods: {
    onSubmit() {
      this.$q.notify({
        color: "green-4",
        textColor: "white",
        icon: "check_circle",
        message: "Parabens, Formulario Submetido...",
      });
    },
  },
};
</script>
