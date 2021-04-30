import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios';

import { Tabbar, TabbarItem, Icon, Popup, Cell, Area } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem)
Vue.use(Icon)
Vue.use(Popup)
Vue.use(Cell)
Vue.use(Area);

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
