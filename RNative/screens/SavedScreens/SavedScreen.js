import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SavedScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Saved</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SavedScreen;
