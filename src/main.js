import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Toast ,Loading } from 'vant';
import './assets/styles/common/reset.scss'
Vue.use(Toast,Loading );
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
