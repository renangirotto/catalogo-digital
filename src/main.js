import Vue from 'vue'
import App from './App.vue'

//Fontawesome Configs
import '@/plugins/fontawesome/fontawesome.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
