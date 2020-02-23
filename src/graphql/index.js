import Vue from 'vue';
import VueApollo from 'vue-apollo'
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

Vue.use(VueApollo);

const httpLink = createHttpLink({
  uri: process.env.VUE_APP_GRAPHQL_HTTP || 'http://localhost:4000/graphql',
  headers: {
    'ET-Client-Name': process.env.VUE_APP_CLIENT_NAME,
  },
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default new VueApollo({ defaultClient: apolloClient })