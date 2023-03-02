<template>
  <div style="position: fixed; top: 10%;">
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


  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
});
</script>

