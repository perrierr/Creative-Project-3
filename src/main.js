import Vue from 'vue'
import App from './App.vue'
import mock from './mock-data.js'
import mock2 from './mock2-data.js'
import mock3 from './mock3-data.js'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

let data = {
  products: mock,
  products2: mock2,
  products3: mock3
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
