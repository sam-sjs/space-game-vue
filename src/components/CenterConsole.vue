<template>
  <div class="shipContainer">
    <NavLinks direction="up" :position="sysBelow" previous="sys_below_id"/>
    <NavLinks direction="left" :position="sysRight" previous="sys_right_id"/>
    <NavLinks direction="right" :position="sysLeft" previous="sys_left_id"/>
    <NavLinks direction="down" :position="sysAbove" previous="sys_above_id"/>
    <img src="@/assets/images/nav-dial.png" alt="Navigation Controls">
    <img src="@/assets/images/ship.png" class="ship" alt="Navigation Controls">
  </div>
</template>

<script>
import NavLinks from './NavLinks.vue'

export default {
  name: 'CenterConsole',
  data: function() {
    return {
      sysBelow: 'TOP',
      sysRight: 'LEFT',
      sysLeft: 'RIGHT',
      sysAbove: 'BOTTOM'
    };
  },
  components: {
    NavLinks
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
