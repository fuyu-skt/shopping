import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import BScroll from 'better-scroll'
import  FastClick  from  'fastclick'
import Vant from 'vant';
import 'vant/lib/index.css';
import http from "./http"
import { Lazyload } from 'vant';


Vue.prototype.$axios = http;
Vue.config.productionTip = false
FastClick.attach(document.body);
Vue.use(Vant);
Vue.use(Lazyload);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
