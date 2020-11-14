import React,{useState,useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import ExploreCard from './ExploreCard';
import { useQuery, } from '@apollo/client';
import {ALL_HOUSES,SAVED_HOUSES_OF_USER} from '../../constants/query'
import LoadingComponent from "../../components/LoadingComponent"
import {user,favouriteHouses,allHouses,searchedData} from '../../constants/storage';
import {useReactiveVar} from '@apollo/client';

const ExploreList = (props) => {

  
  let userInfo =  useReactiveVar(user);
  let data =  useReactiveVar(allHouses)



/*
  const { loading, error, data ,refetch,networkStatus,client} = useQuery(ALL_HOUSES,);  
  if (loading) return <LoadingComponent/>;
  if (error) return <Text>Error :(</Text>;*/
 

    
  
  
  const getSavedStatus = (item) =>{
      //every house has an array with the users that saved it
      //check the array and see if the user id is present
      
      let output=item.savedhousesSet.some((item) =>{
        //console.log(item.user.id + "from set")
        //console.log(userInfo.id + "from app")
        return item.user.id===userInfo.id
          
      });
   
      
      return output
    }
    
    
  return (
    userInfo.id?(
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      data={searchedData()!="empty"? searchedData() : data.allHouses}
      renderItem={({item}) => (
        <ExploreCard
          id = {item.id}
          title={item.title}
          price={item.price}
          address={item.address}
          bedrooms={item.bedrooms}
          bathrooms={item.bathrooms}
          savedStatus={getSavedStatus(item)}
          address={item.address}
          image={item.otherImages[0].image}
          city={item.city}
          location={item.location}
          onPress={() => props.onSelect(item)}
        />
      )}
    />):
    <View></View>
  );
  
};

export default ExploreList;

const styles = StyleSheet.create({});
