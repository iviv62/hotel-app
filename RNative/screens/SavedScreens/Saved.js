/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import SavedCard from '../../components/SavedScreen/SavedCard';

const Saved = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Saved</Text>
        <SavedCard />
        <SavedCard />
        <SavedCard />
      </ScrollView>
    </View>
  );
};

export default Saved;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: 'orange',
    marginLeft: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
});
