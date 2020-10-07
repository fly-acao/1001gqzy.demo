// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// element
import 'element-ui/lib/theme-chalk/index.css';
import { Rate} from 'element-ui';
Vue.component(Rate.name, Rate);

import NutUI from '@nutui/nutui'
import '@nutui/nutui/dist/nutui.css'
NutUI.install(Vue);

Vue.config.productionTip = false
import Axios from 'axios'
Vue.prototype.$axios = Axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
