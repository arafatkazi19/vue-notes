import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import cors from "vue-resource/src/http/interceptor/cors";
import axios from "axios";
import VueAxios from "vue-axios";
import BootstrapVue from "bootstrap-vue";
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

//import VueResource from 'vue-resource';


Vue.config.productionTip = false;
Vue.use(VueAxios,axios);
Vue.use(BootstrapVue);
//Vue.use(VueResource);


new Vue({
    cors,

  router,
  store,
  render: h => h(App)
}).$mount('#app');

