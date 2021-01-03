<template>
  <div>
    <div class="system"><h2>{{this.$store.state.systemName}}</h2></div>

    <CenterConsole/>

    <PlanetSegment v-if="this.$store.state.planet0" passId="planet0"/>
    <PlanetSegment v-if="this.$store.state.planet1" passId="planet1"/>
    <PlanetSegment v-if="this.$store.state.planet2" passId="planet2"/>
    <PlanetSegment v-if="this.$store.state.planet3" passId="planet3"/>
  </div>
</template>

<script>
import CenterConsole from './CenterConsole.vue'
import PlanetSegment from './PlanetSegment.vue'

export default {
  name: 'GameView',
  components: {
    CenterConsole,
    PlanetSegment
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.system {
  position: absolute;
  top: 56px;
  left: 40%;
  width: 20%;
  text-align: center;
  border: 3px solid rgb(68, 135, 175);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 15px;
}

.system h2 {
  margin: 0;
  padding: 4px;
}
</style>
