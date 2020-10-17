import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Details from './Details';
import ExploreHeader from '../../components/ExploreScreen/ExploreHeader';



const ExploreScreen = () => {
  return (
    <ExploreHeader/>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ExploreScreen;
