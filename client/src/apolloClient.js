// client/src/apolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // This URL will point to the GraphQL server
  cache: new InMemoryCache(),
});

export default client;
