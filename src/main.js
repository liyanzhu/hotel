import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "u-reset.css";
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import vconsole from 'vconsole'
import store from './store/index'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(ElementUI)
new vconsole()

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
