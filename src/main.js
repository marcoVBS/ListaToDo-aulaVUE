import Vue from 'vue'
import App from './App.vue'
import Snotify from 'vue-snotify';

Vue.config.productionTip = true
Vue.use(Snotify, {toast: {timeout: 1500}})

new Vue({
  render: h => h(App),
}).$mount('#app')
