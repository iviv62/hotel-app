import React from 'react';
import MainNavigation from './navigation/MainNavigation';
import {ApolloClient, InMemoryCache, ApolloProvider,createHttpLink} from '@apollo/client';
import {user,favouriteHouses, allHouses,searchedData,filteredData} from './constants/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setContext } from '@apollo/client/link/context';
import {ALL_HOUSES,SAVED_HOUSES_OF_USER} from './constants/query';
import * as clientClass from './constants/client-cache';
import * as utils from  './constants/utils';

let client=clientClass.client
let loadData = utils.getDataOnLoadingScreen
loadData()
console.log(client.set)

const App = (props) => {
  return (
    <ApolloProvider client={client}>
      <MainNavigation />
    </ApolloProvider>
  );
};

export default App;
