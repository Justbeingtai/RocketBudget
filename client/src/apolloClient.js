// client/src/apolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Ensure this URL points to your server
  cache: new InMemoryCache(),
});

export default client;
