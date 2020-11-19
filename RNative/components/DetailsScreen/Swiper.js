/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const {width} = Dimensions.get('window');
const height = width * 0.6;


const Swiper = ({images}) => {
  const navigation = useNavigation();
  const [active, setActive] = useState(0);

  const change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );

    if (slide !== active) {
      setActive(slide);
    }
  };
  

  return (
    <Pressable onPress={() => {
      console.log("click")
      
      navigation.navigate("Carousel", images)
    }}>
    <View style={styles.container}>
    <View>
      <ScrollView
        pagingEnabled
        horizontal
        onScroll={change}
        showsHorizontalScrollIndicator={false}
        style={styles.container}>
        {images.map((item,index) => (
          
          <Image key={index} source={{uri: item.image}} style={styles.image} />
       
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((i, k) => (
          <Text
            key={k}
            style={k === active ? styles.pagingActiveText : styles.pagingText}>
            •
          </Text>
        ))}
      </View>
      </View>
     
    </View>
    </Pressable>
  
  );
};

export default Swiper;

const styles = StyleSheet.create({
  container: {
    height,
    width,
  },
  image: {
    height,
    width,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  pagingText: {
    fontSize: 50,
    color: 'white',
    margin: 3,
  },
  pagingActiveText: {
    fontSize: 50,
    color: 'orange',
    margin: 3,
  },
});
