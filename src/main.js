import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import apolloProvider from './graphql'

Vue.config.productionTip = false;

new Vue({
  apolloProvider,
  router,
  store,
  render: h => h(App)
}).$mount('#app');
