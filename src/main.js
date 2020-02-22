import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueApollo from 'vue-apollo'
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
// import { createProvider } from './vue-apollo'

Vue.use(VueApollo);
Vue.config.productionTip = false;

const httpLink = createHttpLink({
  uri: process.env.VUE_APP_GRAPQL_HTTP || 'http://localhost:4000/graphql',
  headers: {
    'ET-Client-Name': process.env.VUE_APP_CLIENT_NAME,
  },
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

new Vue({
  apolloProvider: new VueApollo({ defaultClient: apolloClient }),
  router,
  store,
  render: h => h(App)
}).$mount('#app');
