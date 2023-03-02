<template>
  <q-page flex scroll="no" q-pa-lg items-center windows-height class="q-pa-xl text-center justify-center">
  </q-page>

  <q-form @submit="onSubmit" class="">
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
          (val) => (val && val.length > 0) || 'Por favor, preencha este campo',
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
            (val !== null && val !== '') || 'Por favor, preencha este campos',
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

</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {

  },
})
</script>
