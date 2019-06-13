import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from'./router.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'whatwg-fetch';
import "./plugins/fetch";
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
