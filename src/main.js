import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import http from '@/config/http';
Vue.prototype.$http = http;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  render: h => h(App)
}).$mount('#app')
