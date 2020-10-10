import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExploreHomeScreen from '../screens/ExploreScreens/ExploreHomeScreen';
//import SavedScreen from '../screens/SavedScreens/SavedScreen';
import {createStackNavigator} from '@react-navigation/stack';
import AuthOption from '../screens/AuthScreens/AuthOption';
import AuthHome from '../screens/AuthScreens/AuthHome';
import Saved from '../screens/SavedScreens/Saved';
import ProfileNotLogged from '../screens/ProfileScreens/ProfileNotLogged';
import Profile from '../screens/ProfileScreens/Profile';

const Tab = createBottomTabNavigator();
const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => (
  <ProfileStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <ProfileStack.Screen name="AuthOption" component={Profile} />
    <ProfileStack.Screen name="AuthHome" component={AuthHome} />
  </ProfileStack.Navigator>
);

const HomeNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        // style: {
        //   backgroundColor: Colors.mainCombiStyle1,
        // },
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
        component={ProfileStackScreen}
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
