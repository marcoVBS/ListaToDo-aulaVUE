<template>
  <div id="app">
    <vue-snotify></vue-snotify>
    <lista-component title="Lista de TODO"></lista-component>
  </div>
</template>

<script>
import listaComponent from "./components/lista.vue";

export default {
  name: 'app',
  components: {
    listaComponent
  }
}
</script>

<style>

@import "~vue-snotify/styles/material.css";

</style>
