import React,{useState,useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import ExploreCard from './ExploreCard';
import { useQuery, } from '@apollo/client';
import {ALL_HOUSES,SAVED_HOUSES_OF_USER} from '../../constants/query'
import LoadingComponent from "../../components/LoadingComponent"
import {user,favouriteHouses,allHouses,searchedData,filteredData} from '../../constants/storage';
import {useReactiveVar} from '@apollo/client';
import { useNavigation } from '@react-navigation/native';




const ExploreList = (props) => {

  const navigation = useNavigation();
  let userInfo =  useReactiveVar(user);
  let filterData = useReactiveVar(filteredData)


  
//  const { loading, error, data ,refetch,networkStatus,client} = useQuery(ALL_HOUSES);
 
 // if (loading) return <LoadingComponent/>;
  //if (error) return <Text>Error :(</Text>;
  
  useEffect(() => {
    console.log("hi")
  }, [filterData]);
    
  

  
  
  const getSavedStatus = (item) =>{
      //every house has an array with the users that saved it
      //check the array and see if the user id is present
      let output=item.savedhousesSet.some((item) =>{
        return item.user.id===userInfo.id          
      });
      return output
    }
    
    
  return (
    <View style={{backgroundColor:"#f1f1f1",flex:1}}>
    {filteredData().length>0 && <Text style={styles.result}>result from filter {filteredData().length}</Text>}
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      data={ searchedData()}
      renderItem={({item}) => (
        <ExploreCard
          id = {item.id}
          title={item.title}
          price={item.price}
          address={item.address}
          bedrooms={item.bedrooms}
          bathrooms={item.bathrooms}
          savedStatus={getSavedStatus(item)}
          address={item.address}
          image={item.otherImages[0].image}
          city={item.city}
          location={item.location}
          onPress={() => navigation.navigate('ExploreDetail',item)}
          
        />
      )}
    />
   </View>
    
  );
  
};

export default ExploreList;

const styles = StyleSheet.create({

  result:{
    marginLeft:20,
    fontWeight:"bold",
    fontSize:16,
    marginTop:10,
  }

});
