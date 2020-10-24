import React from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import ExploreCard from './ExploreCard';
import { useQuery, gql } from '@apollo/client';
import {ALL_HOUSES} from '../../constants/query'
import LoadingComponent from "../../components/LoadingComponent"


const ExploreList = (props) => {
  

  const { loading, error, data } = useQuery(ALL_HOUSES);
  if (loading) return <LoadingComponent/>;
  if (error) return <Text>Error :(</Text>;
  
  return (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      data={data.allHouses}
      renderItem={({item}) => (
        <ExploreCard
          title={item.title}
          price={item.price}
          address={item.address}
          bedrooms={item.bedrooms}
          bathrooms={item.bathrooms}
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
