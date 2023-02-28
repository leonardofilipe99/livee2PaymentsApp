<template>
  <q-page class="items-center h-screen q-pa-xl q-gutter-md">
    <div class="">
      <div class="flex column justify-center">
        <div>
          <h6 class="text-secondary text-center">Seleccione</h6>
        </div>

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
          Este serviço vem para facilitar ainda mais a vida dos Clientes pois
          responde a uma necessidade de modernizar a forma de fazer Xitique e de
          guardar dinheiro de uma forma fácil, rápida e segura para uso a
          posterior. Com o dinheiro guardado no Xitique podes comprar novos
          móveis ou electrodomésticos, terminar ou melhorar a casa, ou ainda,
          juntar dinheiro para pagar facturas de água, Credelec, mensalidades
          entre outros serviços disponível no menu M-Pesa.
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Painel",
  data() {},
  methods: {
    onSubmit() {},
  },
};
</script>
