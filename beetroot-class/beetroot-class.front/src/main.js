import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BButton from './components/common/BButton';
import 'animate.css/animate.min.css';
import './scss/style.scss';

Vue.config.productionTip = false;

Vue.component('BButton', BButton);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
