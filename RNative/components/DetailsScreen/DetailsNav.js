/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import AnimatedIconButton from "../AnimatedIconButton"

export default function DetailsNav({title}) {
  const navigation = useNavigation();
  const pr = () => {};

  return (
    <View style={styles.nav} elevation={5}>
      <TouchableHighlight
        activeOpacity={0.5}
        underlayColor="#DDDDDD"
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.arrowLeftContainer}>
        <Icon name="arrow-back" color={'#ffa500'} size={30} />
        
      </TouchableHighlight>
      <Text style={styles.title}>{title}</Text>
      <TouchableHighlight
        activeOpacity={0.5}
        underlayColor="#DDDDDD"
        onPress={pr}
        style={styles.rightIconsContainer}>
        <Icon name="share-social" color={'#ffa500'} size={30} />
        
      </TouchableHighlight>
      <AnimatedIconButton namePrimary={"heart-outline"}
       nameSecondary={"heart"} 
       colorPrimary={"orange"}
      colorSecondary={"orange"}
      size={25}/>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomColor: 'black',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  arrowLeftContainer: {
    height: 40,
    width: 40,
    borderRadius: 60,
    marginHorizontal: 20,
    marginVertical: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIconsContainer: {
    height: 40,
    width: 40,
    borderRadius: 60,
    marginHorizontal: 5,
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 2,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'orange',
  },
});
