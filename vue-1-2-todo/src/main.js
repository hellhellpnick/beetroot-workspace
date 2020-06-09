import Vue from 'vue'
import App from './App.vue'
import AppButton from './components/AppButton';

Vue.component('AppButton', AppButton);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
