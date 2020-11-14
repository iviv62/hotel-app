import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import IconButton from '../IconButton';
import {Searchbar} from 'react-native-paper';
import ExploreList from './ExploreList';
import MapScreen from '../../screens/ExploreScreens/MapScreen';
import {user,favouriteHouses,allHouses,searchedData} from '../../constants/storage';
import {useReactiveVar} from '@apollo/client';

const Tab = createMaterialTopTabNavigator();

const ExploreHeader = (props) => {


  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) =>{ 
    setSearchQuery(query)

    if (query===""){
      searchedData("empty")
    }else{
      let data = allHouses().allHouses

      data=data.filter((item)=>{
       return item.address.toLowerCase().includes(query.toLowerCase())||
        item.city.toLowerCase().includes(query.toLowerCase())||
        item.title.toLowerCase().includes(query.toLowerCase())
      })
      searchedData(data)
      

    }

  }




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
      <ExploreList     onSelect={(item) => {props.navigation.navigate('ExploreDetail',item)}} />

      {/* <Tab.Navigator
        tabBarOptions={{
          indicatorStyle: {backgroundColor: '#ffa500'},

          labelStyle: {fontSize: 16, fontWeight: 'bold'},
        }}>
        <Tab.Screen name="List" component={ExploreList} />
        <Tab.Screen name="Map" component={MapScreen} />
      </Tab.Navigator> */}
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
