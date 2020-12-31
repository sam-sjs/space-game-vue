<template>
  <div @click="navClick(previous)" class="navLinks" :id="direction+'Nav'">
    <div class="directionGuides" :id="direction+'Guide'">{{guide}}</div>
  </div>
</template>

<script>
export default {
  name: 'NavLinks',
  props: {
    position: String,
    direction: String,
    previous: String
  },
  data: function() {
    return {
      above: 'ABOVE',
      left: 'LEFT',
      right: 'RIGHT',
      below: 'BELOW'
    };
  },
  computed: {
    guide: function() {
      // I hate this so much, try and find something tidier, where are ruby case statements(for god sake why is there no obvious way to return directly from the 'if' statement...)
      let system = '';
      if(this.direction === 'up') {
        system = this.above;
      } else if (this.direction === 'left') {
        system = this.left;
      } else if (this.direction === 'right') {
        system = this.right;
      } else if (this.direction === 'down') {
        system = this.below;
      }
      return system;
    }
  },
  methods: {
    navClick: function(previous) {
      this.$http.post('http://localhost:3000/systems', null, {params: {prev_loc: previous}})
        .then((response) => {
          console.log(response.data.sysBelow);
          console.log(this.below);
          this.above = response.data.sysAbove;
          this.left = response.data.sysLeft;
          this.right = response.data.sysRight;
          this.below = response.data.sysBelow;
        })
        .catch(function(error) {
          console.warn(error);
        });
    }
  }
}
</script>

<style scoped>
.navLinks {
  position: absolute;
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

.directionGuides {
  position: absolute;
  text-align: center;
  width: 150px;
}

#upGuide {
  bottom: 50px;
}

#rightGuide {
  top: 61px;
  left: -11px;
  transform: rotate(90deg);
}

#downGuide {
  top: 50px;
}

#leftGuide {
  top: 61px;
  right: -11px;
  transform: rotate(-90deg);
}
</style>
