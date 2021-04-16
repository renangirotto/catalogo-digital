import Vue from 'vue'
import App from './App.vue'

//Routes
import router from './router'

//Store
import store from './store'

//Fontawesome Configs
import '@/plugins/fontawesome/fontawesome.js';

//Vue Slick Carousel Configs
import '@/plugins/vue-slick-carousel/vue-slick-carousel.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
