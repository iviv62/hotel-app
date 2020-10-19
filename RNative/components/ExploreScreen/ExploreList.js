import React from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import ExploreCard from './ExploreCard';
import { useQuery, gql } from '@apollo/client';
import {ALL_HOUSES} from '../../constants/query'


const ExploreList = (props) => {
  

  const { loading, error, data } = useQuery(ALL_HOUSES);
  if (loading) return <Text>Loading...</Text>;
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
          image={item.otherImages[0].image}
          city={item.city}
          onSelect={() => props.navigation.navigate('ExploreDetail',item)}
        />
      )}
    />
  );
};

export default ExploreList;

const styles = StyleSheet.create({});
