<template>
  <div @click="navClick(prevLoc)" class="navLinks" :id="direction+'Nav'"></div>
</template>

<script>
export default {
  name: 'NavLinks',
  props: {
    position: String,
    direction: String,
    prevLoc: String
  },
  methods: {
    navClick: function(prevLoc) {
      console.log(prevLoc);
    }
  }
}
</script>

<style scoped>
.navLinks {
  position:absolute;
  display: block;
  text-align: center;
  cursor: pointer;
}

#upNav {
  top: 0px;
  left: 50px;
  height: 50px;
  width: 150px;
}

#downNav {
  bottom: 0px;
  left: 50px;
  height: 50px;
  width: 150px;
}

#leftNav {
  left: 0px;
  top: 50px;
  height: 150px;
  width: 50px;
}

#rightNav {
  right: 0px;
  top: 50px;
  height: 150px;
  width: 50px;
}
</style>
