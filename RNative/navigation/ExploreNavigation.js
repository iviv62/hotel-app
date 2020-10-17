import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import ExploreHeader from '../components/ExploreScreen/ExploreHeader';
import FilterScreen from '../screens/FilterScreen';
import Details from '../screens/ExploreScreens/Details';

const Stack = createStackNavigator();

const ExploreNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ExploreHome" component={ExploreHeader} />
      <Stack.Screen name="Filter" component={FilterScreen} />
      <Stack.Screen name="ExploreDetail" component={Details} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default ExploreNavigation;
