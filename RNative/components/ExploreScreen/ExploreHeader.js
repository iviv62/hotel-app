import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import IconButton from "../IconButton"
import { Searchbar } from 'react-native-paper';
import ExploreList from "./ExploreList";
import ExploreMap from "./ExploreMap";




const Tab = createMaterialTopTabNavigator();



const ExploreHeader = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);


    return (
        <View style={styles.header}>
        <View style={styles.searchContainer}>
        <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{fontSize: 12, elevation: 0,flex:1}}
        />
        <IconButton name="filter-alt" size={25} color="#000000" />
        </View>

       
        
        <Tab.Navigator
          tabBarOptions={{
            indicatorStyle: {backgroundColor: '#ffa500'},
           
            labelStyle: { fontSize: 16, fontWeight:"bold"},
            
          }}>
          <Tab.Screen name="List" component={ExploreList} />
          <Tab.Screen
            name="Map"
            component={ExploreMap}
          />
        </Tab.Navigator>

        </View>
    )
}

export default ExploreHeader

const styles = StyleSheet.create({
    header: {
        backgroundColor: "white",
        flex:1,
    },
    searchContainer:{
        flexDirection:"row"
      
    },
})
