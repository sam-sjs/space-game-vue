import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messaging: '',
    systemName: '',
    above: '',
    left: '',
    right: '',
    below: '',
    planet0: null,
    planet1: null,
    planet2: null,
    planet3: null,
    userResources: {
      currency: 0,
      fuel: 0,
      crystals: {
        green: 0,
        red: 0,
        blue: 0,
        purple: 0
      }
    }
  },
  // See if we can tidy this up with mapState
  mutations: {
    setSysName: function(state, name) {
      state.systemName = name;
    },
    setAbove: function(state, name) {
      state.above = name;
    },
    setLeft: function(state, name) {
      state.left = name;
    },
    setRight: function(state, name) {
      state.right = name;
    },
    setBelow: function(state, name) {
      state.below = name;
    },
    setPlanet0: function(state, obj) {
      state.planet0 = obj;
    },
    setPlanet1: function(state, obj) {
      state.planet1 = obj;
    },
    setPlanet2: function(state, obj) {
      state.planet2 = obj;
    },
    setPlanet3: function(state, obj) {
      state.planet3 = obj;
    },
    userResources: function(state, obj) {
      state.userResources = obj;
    }
  }
})
