import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import IconButton from '../IconButton';
import {Searchbar} from 'react-native-paper';
import ExploreList from './ExploreList';
import MapScreen from '../../screens/ExploreScreens/MapScreen';

const Tab = createMaterialTopTabNavigator();

const ExploreHeader = (props) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.header}>
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{fontSize: 12, elevation: 0, flex: 1}}
        />
        <IconButton
          name="filter-alt"
          size={25}
          color="#000000"
          onSelect={() => props.navigation.navigate('Filter')}
        />
      </View>

      <Tab.Navigator
        tabBarOptions={{
          indicatorStyle: {backgroundColor: '#ffa500'},

          labelStyle: {fontSize: 16, fontWeight: 'bold'},
        }}>
<<<<<<< HEAD
        <Tab.Screen name="List" component={ExploreList} />
        <Tab.Screen name="Map" component={ExploreMap} />
=======
        <Tab.Screen name="ExploreTab" component={ExploreList} />
        <Tab.Screen name="Map" component={MapScreen} />
>>>>>>> 02d0456fa0d4b952bbe676e10cd9217f788ed1e7
      </Tab.Navigator>
    </View>
  );
};

export default ExploreHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
  },
});
