import React from 'react';
import MainNavigation from './navigation/MainNavigation';
import {ApolloClient, InMemoryCache, ApolloProvider,createHttpLink} from '@apollo/client';
import {user,favouriteHouses, allHouses,searchedData,filteredData} from './constants/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setContext } from '@apollo/client/link/context';
import {ALL_HOUSES,SAVED_HOUSES_OF_USER} from './constants/query'

const httpLink = createHttpLink({
  uri: 'http://api.ivelin.info/graphql/',
});

const authLink =setContext(async(_, { headers }) =>{
  
  let userInfo =  await AsyncStorage.getItem('user');
  if(userInfo){

    userInfo = JSON.parse(userInfo);
    user(userInfo)
    const token = userInfo.token;
     // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `JWT ${token}` : "",
    }
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

        favouriteHouses:{
          read() {
            return favouriteHouses();
          }
          },

        allHouses:{
          read() {
            return allHouses();
          }
        },

        searchedData:{
          read() {
            return searchedData();
          }
          },

          filteredData:{
            read() {
              return filteredData();
            }
           },

        },

        },
      },
    
  
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: cache,
});

const getDataOnLoadingScreen= async()=>{
let responseSaved = await client.query({query:SAVED_HOUSES_OF_USER}) 
  .then((data) => {
  //save in reactive variable
  favouriteHouses(data.data)

}).catch((error)=>{
   console.log(error);
});

let responseAll =await client.query({query:ALL_HOUSES}).then((data) => {
  //save in reactive variable
  console.log(data.data)
  allHouses(data.data)
  searchedData(data.data.allHouses);

}).catch((error)=>{
 console.log(error);
});
}
getDataOnLoadingScreen()


const App = (props) => {
  return (
    <ApolloProvider client={client}>
      <MainNavigation />
    </ApolloProvider>
  );
};

export default App;
