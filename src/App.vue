<template>
  <div id="app">
    <SplashPage v-if="splashShow"/>
    <img v-if="helloShow" alt="Vue logo" src="./assets/logo.png">
    <HelloWorld v-if="helloShow" msg="Welcome to Your Vue.js App"/>
    <CenterConsole v-if="consoleShow"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CenterConsole from './components/CenterConsole.vue'
import SplashPage from './components/SplashPage.vue'

export default {
  name: 'App',
  data: function() {
    return {
      helloShow: false,
      splashShow: false,
      consoleShow: true
    };
  },
  components: {
    HelloWorld,
    CenterConsole,
    SplashPage
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
