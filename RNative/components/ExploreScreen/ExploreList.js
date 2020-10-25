import React,{useState} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import ExploreCard from './ExploreCard';
import { useQuery, gql,NetworkStatus  } from '@apollo/client';
import {ALL_HOUSES} from '../../constants/query'
import LoadingComponent from "../../components/LoadingComponent"


const ExploreList = (props) => {
  
  



  const { loading, error, data ,refetch,networkStatus} = useQuery(ALL_HOUSES,
    {notifyOnNetworkStatusChange: true,});

   
  if (loading) return <LoadingComponent/>;
  if (error) return <Text>Error :(</Text>;
  
  return (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      data={data.allHouses}
      renderItem={({item}) => (
        <ExploreCard
          id = {item.id}
          title={item.title}
          price={item.price}
          address={item.address}
          bedrooms={item.bedrooms}
          bathrooms={item.bathrooms}
          refreshing={networkStatus===networkStatus.refetch}
          onRefresh={() =>  refetch()}
          address={item.address}
          image={item.otherImages[0].image}
          city={item.city}
          location={item.location}
          onPress={() => props.navigation.navigate('ExploreDetail',item)}
        />
      )}
    />
  );
};

export default ExploreList;

const styles = StyleSheet.create({});
