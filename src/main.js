import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import ant from "./config/AntDesign";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ant);
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
