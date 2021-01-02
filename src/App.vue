<template>
  <div id="app">
    <SplashPage v-if="splashShow"/>
    <LoginPage v-if="loginShow"/>
    <GameView v-if="gameShow"/>
  </div>
</template>

<script>
import GameView from './components/GameView.vue'
import SplashPage from './components/SplashPage.vue'
import LoginPage from './components/LoginPage.vue'

export default {
  name: 'App',
  data: function() {
    return {
      splashShow: false,
      gameShow: true,
      loginShow: false
    };
  },
  components: {
    GameView,
    SplashPage,
    LoginPage
  }
}
</script>

<style>
/* Import global stylesheet */
@import './assets/stylesheets/style.css';
</style>
