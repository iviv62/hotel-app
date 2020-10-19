/* eslint-disable prettier/prettier */
import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

import {List} from 'react-native-paper';

const AboutDetails = ({scrollRef, description}) => {
  const [expanded, setExpanded] = useState(false);

  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id);
  };

  const handlePress = () => {
    setExpanded(!expanded);

    setTimeout(() => {
      scrollRef.current.scrollToEnd();
    }, 300);
  };

  return (
    <View>
      <List.Accordion
        title="About the property"
        titleStyle={styles.title}
        expanded={expanded}
        onPress={getItem}>
        <ScrollView>
          <Text style={styles.text}>{description}</Text>
        </ScrollView>
      </List.Accordion>
    </View>
  );
};

export default AboutDetails;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: -5,
    color: 'black',
  },
  line: {
    borderBottomColor: '#c4c4c4',
    borderBottomWidth: 0.5,
    marginHorizontal: 10,
  },
  text: {
    paddingHorizontal: 20,
  },
});
