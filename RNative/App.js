import React from 'react';
import MainNavigation from './navigation/MainNavigation';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {userName} from './constants/storage';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        userName: {
          read() {
            return userName();
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'http://api.ivelin.info/graphql/',
  cache: cache,
});

const App = (props) => {
  return (
    <ApolloProvider client={client}>
      <MainNavigation />
    </ApolloProvider>
  );
};

export default App;
