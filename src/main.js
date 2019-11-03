import Vue from 'vue'
import App from './App.vue'
import VueApollo from 'vue-apollo'
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { createProvider } from './vue-apollo'

library.add(faBus);

Vue.component('font-awesome-icon', FontAwesomeIcon);
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
  apolloProvider: new VueApollo({defaultClient: apolloClient}),
  render: h => h(App)
}).$mount('#app');
