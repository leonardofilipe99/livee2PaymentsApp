<template>
  <q-page class="q-pa-xl text-center">
      <div style="justify-content: center;">
        <div class="text-center">
          <q-img src="/construa.png"
               alt=""
               style="" />
        </div>
      </div>
  </q-page>
</template>

<script>

export default {
  name: 'Index',
  data () {
    return {
      payload: {
        amount: null,
        phone: null,
        reference: null,
      },
      options: [
        'Selecione', 'Live', 'TestarPagamento', 'PagarCurso', 'DoarValor'
      ]
    }
  },
  methods: {
    onSubmit () {


      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'check_circle',
        message: 'Parabens, Formulario Submetido...'
      })

    },

  }
}
</script>
