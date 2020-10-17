import React from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import ExploreCard from './ExploreCard';

const data = [
  {
    id: 0,
    title: 'House Example',
    area: '200 square meters',
    bathrooms: 2,
    bedrooms: 3,
    address: 'Example street 1',
    builtOn: '18/9/2020',
    description: 'Example description',
    floors: 4,
    location: '(22,22)',
    price: 230.0,
  },
  {
    id: 1,
    title: 'House Example2',
    area: '20 square meters',
    address: 'Example street 2',
    bathrooms: 22,
    bedrooms: 33,
    builtOn: '18/7/2020',
    description: 'Example 2 description',
    floors: 3,
    location: '(22,22)',
    price: 230333.0,
  },
];

const ExploreList = (props) => {
  return (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      data={data}
      renderItem={({item}) => (
        <ExploreCard
          title={item.title}
          price={item.price}
          address={item.address}
          bedrooms={item.bedrooms}
          bathrooms={item.bathrooms}
          onSelect={() => props.navigation.navigate('ExploreDetail')}
        />
      )}
    />
  );
};

export default ExploreList;

const styles = StyleSheet.create({});
