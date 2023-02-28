<template>
  <q-page class="items-center h-screen q-pa-xl q-gutter-md">
    <div class="flex justify-center">
      <div class="">
        <q-btn-group push>
          <q-btn
            to="/depositar"
            color="primary"
            push
            label="Efectuar xitique"
            icon="timeline"
          />
          <q-btn
            color="secondary"
            push
            label="Visualizar xitiques feitos"
            icon="visibility"
            to="/v-meses"
          />
          <q-btn
            color="primary"
            push
            label="Mês de recepção de xitique"
            icon="update"
            to="/p-recepcao"
          />
        </q-btn-group>

        <div style="margin-top: 20px">
          "Janeiro", "Fevereiro", "Março ", "Abril", "Maio", "Junho", "Julho",
          "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "ProximaRecepcao",
  data() {},
  methods: {
    onSubmit() {},
  },
};
</script>
