/* eslint-disable prettier/prettier */
import React from 'react';
import {View, ScrollView} from 'react-native';
import DetailsCard from '../../components/DetailsScreen/DetailsCard';
import AboutDetails from '../../components/DetailsScreen/AboutDetails';
import DetailsNav from '../../components/DetailsScreen/DetailsNav';

const Details = (props) => {
  return (
    <View style={{flex: 1}}>
      <DetailsNav />
      <ScrollView>
        <DetailsCard />
        <AboutDetails />
      </ScrollView>
    </View>
  );
};

export default Details;
