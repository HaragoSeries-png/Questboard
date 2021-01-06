import Vue from 'vue'
import App from './Appp.vue'
import router from './router/AppControl'
import store from './store'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
Vue.config.productionTip = false
Vue.config.silent=false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

