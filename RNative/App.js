import React from 'react';
import MainNavigation from './navigation/MainNavigation';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://api.ivelin.info/graphql/',
  cache: new InMemoryCache()
});



const App = (props) => {
  return (
    <ApolloProvider client={client}>
      <MainNavigation />
    </ApolloProvider>
  );
};

export default App;
