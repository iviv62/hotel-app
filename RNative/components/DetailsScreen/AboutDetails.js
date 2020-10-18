/* eslint-disable prettier/prettier */
import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, ScrollView, } from 'react-native';

import { List } from 'react-native-paper';

const AboutDetails = ({ scrollRef }) => {
  const [expanded, setExpanded] = useState(true);

  const test = useRef(null);

  const handlePress = () => {
    setExpanded(!expanded);
    setTimeout(() => {

      scrollRef.current.scrollToEnd();
    }, 300)

  }



  return (
    <View>

      <List.Accordion

        title="About the property"
        titleStyle={styles.title}
        expanded={expanded}
        onPress={handlePress}>
        <ScrollView>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            vehicula eros non maximus dapibus. Vivamus vestibulum tempor varius.
            Maecenas varius vitae nisi in consequat. Integer lectus enim,
            ullamcorper eu molestie dictum, lacinia egestas turpis. Integer varius
            interdum cursus. Vivamus elementum justo eu augue tincidunt, vitae
            semper diam molestie. In hac habitasse platea dictumst. Aenean augue
            diam, iaculis id porta ut, aliquet in nisl. Morbi molestie tempus
            convallis. Fusce eget dapibus mauris. Nulla sit amet neque tristique,
            pulvinar nulla sed, hendrerit tortor. Curabitur laoreet mauris ac
            aliquam fermentum. Nulla sed euismod augue.
        </Text>

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
    color: "black"
  },
  line: {
    borderBottomColor: '#c4c4c4',
    borderBottomWidth: 0.5,
    marginHorizontal: 10,
  },
  text: {
    paddingHorizontal: 20,

  }

});
