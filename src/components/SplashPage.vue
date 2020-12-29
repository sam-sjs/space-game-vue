<template>
  <div>
    <div class="main">SPACE GAME!!!</div>

    <div id="alert" class="text">
      ALERT!: Energy crystals nearing depletion - Planetary defences weakening
    </div>

    <div class="text">
      As the finest captain in the Federation Navy you have been tasked with finding FOUR replacement energy crystals to ensure the safety of your people.  You must set off immediately before word of your weakened defences spreads to those who might intend you harm!
    </div>

    <div class="links_container">

    </div>
  </div>
</template>

<script>

export default {
  name: 'SplashPage'
}
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  font-size: 100px;
}

#alert {
  font-size: 20pt;
  color: #FE6B64;
}

.text {
  display: flex;
  position: relative;
  margin-top: 50px;
  left: calc(50vw - 300px);
  justify-content: center;
  color: #FDFD98;
  font-size: 16pt;
  width: 600px;
  text-align: center;
}

.links_container {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
</style>
