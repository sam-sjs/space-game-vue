<template>
  <div class="shipContainer">
    <!-- Navigation Controls -->
    <NavLinks direction="up" previous="sys_below_id"/>
    <NavLinks direction="left" previous="sys_right_id"/>
    <NavLinks direction="right" previous="sys_left_id"/>
    <NavLinks direction="down" previous="sys_above_id"/>

    <!-- Central Console Images -->
    <img src="@/assets/images/nav-dial.png" alt="Navigation Controls">
    <img src="@/assets/images/ship.png" class="ship" alt="Navigation Controls">

    <!-- Ship Resources -->
    <div class="outerResources">
      <div class="resources">
        <div class="currency">
          {{this.$store.state.userResources.currency.toLocaleString('en')}}<span>&#8353;</span>
        </div>
        <div class="he3">
          <sup>3</sup>He: {{this.$store.state.userResources.fuel}}
        </div>
      </div>
      <div v-if="collected" class="crystalContainer">
        <div class="crystals">
          <img v-if="this.$store.state.userResources.crystals.green" src="@/assets/images/green.png" alt="Green Crystal">
          <img v-if="this.$store.state.userResources.crystals.red" src="@/assets/images/red.png" alt="Red Crystal">
          <img v-if="this.$store.state.userResources.crystals.blue" src="@/assets/images/blue.png" alt="Blue Crystal">
          <img v-if="this.$store.state.userResources.crystals.purple" src="@/assets/images/purple.png" alt="Purple Crystal">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavLinks from './NavLinks.vue'

export default {
  name: 'CenterConsole',
  components: {
    NavLinks
  },
  mounted: function() {
    this.$http.get('http://localhost:3000/systems')
      .then((response) => {
        // Can probably just grab the entire systems/planets objects and push the entire thing into vuex state
        this.$store.commit('setSysName', response.data.systemName);
        this.$store.commit('setAbove', response.data.sysAbove);
        this.$store.commit('setLeft', response.data.sysLeft);
        this.$store.commit('setRight', response.data.sysRight);
        this.$store.commit('setBelow', response.data.sysBelow);
        this.$store.commit('setPlanet0', response.data.planet0);
        this.$store.commit('setPlanet1', response.data.planet1);
        this.$store.commit('setPlanet2', response.data.planet2);
        this.$store.commit('setPlanet3', response.data.planet3);
        this.$store.commit('userResources', response.data.userResources);
        this.$store.state.messaging = '';
      })
      .catch(function(error) {
        console.warn(error);
      });
  },
  computed: {
    // This is insane but it makes things work for now -- shouldn't require all this to get a true/false
    collected: function() {
      if(this.$store.state.userResources.crystals.green) {
        return true;
      } else if(this.$store.state.userResources.crystals.red) {
        return true;
      } else if(this.$store.state.userResources.crystals.blue) {
        return true;
      } else if(this.$store.state.userResources.crystals.purple) {
        return true;
      } else {
        return false;
      }
    }
  }
}
</script>

<style scoped>
.shipContainer {
  position: absolute;
  height: 250px;
  width: 250px;
  top: calc(50% - 125px);
  left: calc(50% - 125px);
}

.ship {
  position: absolute;
  top: 50px;
  left: 55px;
  height: 140px;
  width: 140px;
}

.outerResources {
  position: relative;
  width: 350px;
  top: 40px;
  right: 50px;
}

.resources {
  display: flex;
  justify-content: center;
  width: 350px;
  font-size: 18pt;
  color: #FDFD98;
}

.currency {
  position: relative;
  top: 2px;
  font-size: 20pt;
  margin-right: 20px;
  width: 155px;
  text-align: right;
}

.he3 {
  margin-left: 20px;
  width: 155px;
}

.crystals {
  display: flex;
  justify-content: center;
  position: relative;
  top: 50px;
  max-width: 350px;
  border: 3px solid rgb(68, 135, 175);
  border-radius: 15px;
  background-color: rgba(255,255,255,0.25);
}
</style>
