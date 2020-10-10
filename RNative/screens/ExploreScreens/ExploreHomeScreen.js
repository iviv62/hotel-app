import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Details from './Details';

const ExploreScreen = () => {
  return <Details />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ExploreScreen;
