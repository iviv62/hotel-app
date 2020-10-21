/* eslint-disable prettier/prettier */
import React,{useEffect,useRef} from 'react';
import {View, ScrollView} from 'react-native';
import DetailsCard from '../../components/DetailsScreen/DetailsCard';
import DetailsNav from '../../components/DetailsScreen/DetailsNav';



const Details = ({navigation, route}) => {

const scrollRef=useRef()
  
  return (
    <View style={{flex: 1}}>
      <DetailsNav title={route.params.title} />
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
