<template>
  <q-scroll-area
    style="
      height: calc(100% - 150px);
      margin-top: 150px;
      border-right: 1px solid #ddd;
    "
  >
    <q-list padding>

      <OptionComponent
        v-for="(option, index) in options"
        :key="index"
        :title="option.title"
        :iconName="option.iconName"
        :link="option.link"
        :v-if="option.visualizar"
      />
    </q-list>
  </q-scroll-area>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import OptionComponent from "./OptionComponent.vue";


export default defineComponent({
  components: {
    OptionComponent,
  },
  setup() {
    return {

      options: [
        {title: 'Inicio', iconName: 'home', link: '/home', visualizar: isLogin},
        {title: 'Entrar', iconName: 'login', link: '/login', visualizar: isLogin},
        {title: 'Registar', iconName: 'edit_note', link: '/signup', visualizar: isLogin},
        {title: 'perfil', iconName: 'person', link: '/profile', visualizar: isLogin},
        {title: 'Ajuda', iconName: 'help', link: '/help', visualizar: isLogin},
        {title: 'Sair', iconName: 'power_settings_new', link: '/', visualizar: isLogin}
      ],
    };
    methods: {

    }
  },
});
</script>
>

