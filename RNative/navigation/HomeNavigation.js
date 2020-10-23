/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import ExploreHomeScreen from '../screens/ExploreScreens/ExploreHomeScreen';
//import SavedScreen from '../screens/SavedScreens/SavedScreen';
import {createStackNavigator} from '@react-navigation/stack';
import AuthHome from '../screens/ProfileScreens/AuthHome';
import Saved from '../screens/SavedScreens/Saved';
import ProfileNotLogged from '../screens/ProfileScreens/ProfileNotLogged';
import Profile from '../screens/ProfileScreens/Profile';
import {userName} from '../constants/storage';
import {useReactiveVar} from '@apollo/client';

const Tab = createBottomTabNavigator();
const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => (
  <ProfileStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <ProfileStack.Screen name="AuthOption" component={ProfileNotLogged} />
    <ProfileStack.Screen name="AuthHome" component={AuthHome} />
  </ProfileStack.Navigator>
);

const HomeNavigation = () => {
  const loggedIn = useReactiveVar(userName);

  useEffect(async () => {
    try {
      const value = await AsyncStorage.getItem('userName');
      if (value !== null) {
        userName(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  }, []);

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#ffa500',
      }}>
      <Tab.Screen
        name="Explore"
        component={ExploreHomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="ios-search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="ios-heart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={loggedIn == '' ? ProfileStackScreen : Profile}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigation;
