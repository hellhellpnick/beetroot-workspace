import Vue from 'vue';
import App from './App.vue';
import AppButton from './components/common/AppButton';
import { appStorage } from './utils';

Vue.component('AppButton', AppButton);

Vue.config.productionTip = false;
Vue.prototype.$appStorage = appStorage;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
