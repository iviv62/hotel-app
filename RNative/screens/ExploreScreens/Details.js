/* eslint-disable prettier/prettier */
import React,{useEffect,useRef} from 'react';
import {View, ScrollView} from 'react-native';
import DetailsCard from '../../components/DetailsScreen/DetailsCard';
import DetailsNav from '../../components/DetailsScreen/DetailsNav';
import {useReactiveVar} from '@apollo/client';
import {user} from '../../constants/storage';


const Details = ({navigation, route,item}) => {

  let userInfo =  useReactiveVar(user);
  const getSavedStatus = (item) =>{
    //every house has an array with the users that saved it
    //check the array and see if the user id is present
    let output=item.savedhousesSet.some((item) =>{
      return item.user.id===userInfo.id          
    });
    //item.savedStatus=output
    return output
  }
  
  



const scrollRef=useRef()
  
  return (
    <View style={{flex: 1}}>
      <DetailsNav title={route.params.title} item={route.params} id={route.params.id} status={getSavedStatus(route.params)} />
      <ScrollView
      ref={scrollRef}
      >
    
        <DetailsCard 
        price={route.params.price} 
        bathrooms={route.params.bathrooms}
        bedrooms={route.params.bedrooms}
        floors={route.params.floors}
        title={route.params.title}
        builtOn={route.params.builtOn}
        area={route.params.area}
        description={route.params.description}
        postedBy={route.params.postedBy}
        scrollRef={scrollRef}
        images={route.params.otherImages}
        city={route.params.city}
        location={route.params.location}
        address={route.params.address}
        
        />
      </ScrollView>
    </View>
  );
};

export default Details;
