import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import cors from "vue-resource/src/http/interceptor/cors";
import axios from "axios";
import VueAxios from "vue-axios";

//import VueResource from 'vue-resource';


Vue.config.productionTip = false;
Vue.use(VueAxios,axios);
//Vue.use(VueResource);


new Vue({
    cors,

  router,
  store,
  render: h => h(App)
}).$mount('#app');

