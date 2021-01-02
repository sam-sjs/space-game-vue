<template>
  <div class="planets" :id="passId">
    <div class="imageContainer">
      {{this.$store.state.planet0.name}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlanetSegment',
  props: {
    passId: String
  }
}
</script>

<style scoped>
.planets {
  position: absolute;
  /* display: none; */
  width: 30%;
  height: 40%;
  max-width: 450px;
  padding: 10px;
  border: 3px solid rgb(68, 135, 175);
  border-radius: 25px;
  background-color: rgba(255,255,255,0.25);
}

#planet0 {
  top: 56px;
  left: 20px;
}

#planet1 {
  top: 56px;
  right: 20px;
}

#planet2 {
  bottom: 20px;
  right: 20px;
}

#planet3 {
  bottom: 20px;
  left: 20px;
}

.imageContainer {
  width: 250px;
  height: 250px;
  margin-bottom: 15px;
}
</style>
