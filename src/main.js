import Vue from 'vue'
import App from './App.vue'
import store from './vuex'
import axios from 'axios'

Vue.prototype.$http = axios

const accessToken = localStorage.getItem('jwtToken');
if(accessToken) {
  Vue.prototype.$http.defaults.headers.common.Authorization = accessToken;
}

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
