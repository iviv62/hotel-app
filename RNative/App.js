import React from 'react';
import MainNavigation from './navigation/MainNavigation';
import {ApolloClient, InMemoryCache, ApolloProvider,createHttpLink} from '@apollo/client';
import {user} from './constants/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://api.ivelin.info/graphql/',
});

const authLink =setContext((_, { headers }) => async()=>{
  
  let user =  await AsyncStorage.getItem('user');
  user = JSON.parse(user);
  const token = user.token;

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : "",
    }
  }
});

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        user: {
          read() {
            return user();
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
