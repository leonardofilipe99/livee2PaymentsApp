<template>
  <q-page class="q-pa-xl q-gutter-md">
    <div class="row flex justify-center">
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

        <div class="text-center" style="margin-top: 20px;">
          <img
            src="https://user-images.githubusercontent.com/18400142/132318330-b8536515-d0d3-44ba-817e-ee2d269722f6.png"
            alt=""
            style="width: 100px; height: 100px"
          />
        </div>

        <q-form @submit="onSubmit" class="q-gutter-md">
          <q-select
            filled
            v-model="payload.reference"
            :options="options"
            label="Indique o mês"
            lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== 'Seleccione') ||
                'Por favor, selecione alguma opção',
            ]"
          />

          <q-input
            filled
            v-model="payload.amount"
            label="Insira o valor a enviar *"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'Por favor, preencha este campo',
            ]"
          />

          <q-input
            filled
            type="number"
            v-model="payload.phone"
            label="Numero com MPesa 84/85"
            lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== '') ||
                'Por favor, preencha este campos',
              (val) =>
                (val > 0 && val.toString().length === 9) ||
                'Insira um numero válido',
            ]"
          />

          <div class="text-right">
            <q-btn
              label="Submit"
              type="submit"
              color="primary"
              style="width: 180px; height: 40px"
            />
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "DepositarValor",
  data() {
    return {
      payload: {
        amount: null,
        phone: null,
        reference: null,
      },
      options: [
        "Selecione o mês de referência ",
        "Janeiro",
        "Fevereiro",
        "Março ",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ],
    };
  },
  methods: {
    onSubmit() {
      this.$q.notify({
        color: "green-4",
        textColor: "white",
        icon: "check_circle",
        message:
          "Parabéns, Formulário Submetido... Aguarde a confirmação do pagamento.",
      });
    },
  },
};
</script>
