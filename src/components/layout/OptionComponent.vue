<template>
<q-item :v-if="visualizar" :to="link" clickable v-ripple>
    <q-item-section avatar>
      <q-icon color="red" :name="iconName" />
    </q-item-section>
    <q-item-section> {{ title }} </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    title: String,
    iconName: String,
    link: String,
    visualizar: String,

  },
  setup() {
    return{}
  },
});
</script>
