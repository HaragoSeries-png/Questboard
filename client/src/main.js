import Vue from 'vue'
import App from './App.vue'
import router from './router/AppControl'
import store from './store'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

// import VueSimpleAlert from "vue-simple-alert";
// Vue.use(VueSimpleAlert);

// import VueSweetalert2 from 'vue-sweetalert2';
// import 'sweetalert2/dist/sweetalert2.min.css';
// Vue.use(VueSweetalert2);

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

