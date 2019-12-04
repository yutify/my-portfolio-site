<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({})
export default class App extends Vue {}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
