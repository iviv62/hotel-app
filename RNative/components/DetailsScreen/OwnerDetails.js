/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const OwnerDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Owner Details</Text>

      <View style={styles.profileContainer}>
        {/* <Image source={avatar} style={{width:60, height:60}}/> */}
        <Icon name="person-circle-outline" color={'#ffa500'} size={30} />
        <Text style={styles.name}>John Doe</Text>
        <Text styles={styles.phone}>+359 547 867</Text>
        <Text styles={styles.email}>Doe@gmail.com</Text>
      </View>
    </View>
  );
};

export default OwnerDetails;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  profileContainer: {
    alignItems: 'center',
  },
});
