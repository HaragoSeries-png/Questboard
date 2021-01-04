import Vue from 'vue'
import App from './Appp.vue'
import router from './router/AppControl'
import store from './store'

Vue.config.productionTip = false
Vue.config.silent=false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

