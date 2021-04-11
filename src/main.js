import Vue from 'vue'
import App from './App.vue'

//Routes
import router from './router'

//Fontawesome Configs
import '@/plugins/fontawesome/fontawesome.js';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
