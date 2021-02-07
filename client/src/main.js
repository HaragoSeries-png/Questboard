import Vue from 'vue'
import App from './Appp.vue'
import router from './router/AppControl'
import store from './store'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

// import VueSimpleAlert from "vue-simple-alert";
// Vue.use(VueSimpleAlert);

Vue.config.productionTip = false
Vue.config.silent = false

Vue.mixin({
  data: function() {
    return {
      gurl:'http://localhost:5000'
    }
  }
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created: function() {
    this.gurl = "http://localhost:5000";
  }
}).$mount('#app')

