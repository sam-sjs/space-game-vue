import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    systemName: '',
    above: '',
    left: '',
    right: '',
    below: ''
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
    }
  }
})
