<template>
  <div class="planets" :id="passId">
    <div class="imageContainer">
      <img :src="require('@/assets/images/' + this.$store.state[passId].img)" alt="Planet Image"><br>
    </div>
    {{this.$store.state[passId].name}}<br>
    Planet size: {{this.$store.state[passId].size}}<br>
    Fuel Status: <strong><span :style="{color: fuelColor()}">{{this.$store.state[passId].fuelStatus}}</span></strong><br>
    Sensors: <strong><span :style="{color: sensorColor()}">{{this.$store.state[passId].sensorStatus}}</span></strong><br>
    <div class="buttonContainer">
      <div v-if="mineButton" class="mineContainer">
        <button @click="buildMine()" type="button" class="buttons">Build Mine</button>
        <div class="minePrice">500&#8353;</div>
      </div>
      <div v-if="investigateButton" class="investigateContainer">
        <button @click="investigatePOI()" type="button" class="buttons">Investigate POI</button>
        <div class="investigatePrice">-He3</div>
      </div>
      <button v-if="collectButton" @click="collectFuel()" type="button" class="buttons">Collect Fuel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlanetSegment',
  props: {
    passId: String
  },
  methods: {
    // Can fuel and sensor methods be combined?
    // Should the is a computer prop, maybe look to change after working
    // For some reason computed wasn't returning a value...dunno why, check later
    fuelColor: function() {
      const fuel = this.$store.state[this.passId].fuelStatus
      if(fuel.substring(0, 4) === 'He-3') {
        return '#77DD77';
      } else if(fuel === 'Helium-3 Available') {
        return '#779ECB';
      } else if(fuel === 'No Helium-3 deposits found') {
        return '#FE6B64';
      }
    },
    sensorColor: function() {
      const sensor = this.$store.state[this.passId].sensorStatus
      if(sensor === 'Point of interest investigated') {
        return '#779ECB';
      } else if(sensor === 'Point of interest found') {
        return '#77DD77';
      } else if(sensor === 'Nothing of note') {
        return '#FDFD98';
      }
    },
    buildMine: function() {
      this.$http.patch('http://localhost:3000/planets/' + this.$store.state[this.passId].id, null, {params: {type: 'mine'}})
        .then((response) => {
          this.$store.state[this.passId].fuelStatus = response.data.fuelStatus;
        })
        .catch((error) => {
          console.log(error);
        })
    },
    investigatePOI: function() {
      this.$http.patch('http://localhost:3000/planets/' + this.$store.state[this.passId].id, null, {params: {type: 'investigate'}})
        .then((response) => {
          this.$store.state[this.passId].sensorStatus = response.data.sensorStatus;
        })
        .catch((error) => {
          console.log(error);
        })
    },
    collectFuel: function() {
      this.$http.patch('http://localhost:3000/planets/' + this.$store.state[this.passId].id, null, {params: {type: 'collect'}})
        .then((response) => {
          this.$store.state[this.passId].fuelStatus = response.data.fuelStatus;
        })
        .catch((error) => {
          console.log(error);
        })
    }
  },
  computed: {
    mineButton: function() {return this.$store.state[this.passId].fuelStatus === 'Helium-3 Available';},
    investigateButton: function() {return this.$store.state[this.passId].sensorStatus === 'Point of interest found';},
    collectButton: function() {return this.$store.state[this.passId].fuelStatus.substring(0, 4) === 'He-3'}
  }
}
</script>

<style scoped>
.planets {
  position: absolute;
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

.planets img {
  position: relative;
  max-height: 250px;
  max-width: 250px;
  z-index: 1;
}

.buttonContainer {
  display: flex;
  margin-top: 10px;
  width: 100%;
}

.buttons {
  position: relative;
  background-color: #779ECB;
  color: #2A508B;
  font-size: 14pt;
  cursor: pointer;
  margin-right: 5px;
  z-index: 1;
}

.buttons:hover {
  background-color: #2A508B;
  color: #779ECB;
}

.mineContainer {
  height: 54px;
}

.minePrice {
  position: relative;
  color: #FE6B64;
  left: 25px;
}

.investigateContainer {
  height: 54px;
}

.investigatePrice {
  position: relative;
  color: #FE6B64;
  left: 45px;
}
</style>
