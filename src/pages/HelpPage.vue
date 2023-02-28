<template>

    <q-page class="flex flex-center column q-pa-md">

      <div>

        <p>Estamos sempre disponíveis para ajudá-lo a gerir o seu <strong>xitique com a construa</strong> e os seus <strong>convites</strong>. </p>

      </div>

      <div class="text-bold" style="color:grey; ">

        <h6>Contacte-nos:</h6>

      </div>

      <div class="column q-gutter-sm">

        <q-btn color="" :ripple="false" text-color="grey" label="Construa" />
        <q-btn no-caps icon="mail" label="helpdesk@construa.co.mz" />
        <q-btn no-caps icon="phone" label="(+258) 84 123 4567" />
        <q-btn no-caps icon="phone" label="(+258) 86 123 4567" />

      </div>

      <div class="text-bold" style="color:grey; ">

        <h6>Contacte-nos pelo Whatsapp:</h6>

      </div>
            <div class="column q-gutter-sm">

        <q-btn color="secondary" label="Conversar pelo Whatsapp" />

      </div>

    </q-page>

  </template>

  <script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'HelpPage'
  })
  </script>
