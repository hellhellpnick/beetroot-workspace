import Vue from 'vue'
import App from './App.vue'
import TButton from './components/common/TButton';

Vue.component('TButton', TButton);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
