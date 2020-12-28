<template>
  <div id="app">
    <img v-if="hello" alt="Vue logo" src="./assets/logo.png">
    <HelloWorld v-if="hello" msg="Welcome to Your Vue.js App"/>
    <CenterConsole/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CenterConsole from './components/CenterConsole.vue'

export default {
  name: 'App',
  data: function() {
    return {
      hello: false
    };
  },
  components: {
    HelloWorld,
    CenterConsole
  }
}
</script>

<style>
/* Import global stylesheet */
@import './assets/stylesheets/style.css';
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
