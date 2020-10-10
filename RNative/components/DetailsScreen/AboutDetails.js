/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AboutDetails = () => {
  const [setActive, setActivateState] = useState('');
  const [height, setHeight] = useState('100%');
  const [rotate, setRotate] = useState();

  const toggleAcordion = () => {
    setActivateState(setActive === '' ? 'active' : '');
    setHeight(setActive === 'active' ? '100%' : '0%');
  };

  return (
    <View>
      <View style={styles.line} />
      <TouchableHighlight onPress={toggleAcordion}>
        <View style={styles.acordionTitleContainer}>
          <Text style={styles.title}>About the property</Text>
          {/* <Image  source={chevron} style={styles.chevron}/> */}
          <View style={styles.chevron}>
            <Icon name="chevron-down" color={'#ffa500'} size={30} />
          </View>
        </View>
      </TouchableHighlight>
      <View>
        <Text
          style={{
            maxHeight: `${height}`,
            marginHorizontal: 20,
            flexWrap: 'wrap',
          }}>
          Lorem ipsum dolor sit amet consectetur earum.Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Minima eum magnam voluptas optio
          explicabo deleniti accusantium. Debitis temporibus repellendus illo
          animi delectus beatae fugit amet sint nihil doloribus, perspiciatis
          tempore assumenda unde? Aspernatur aut nihil vero quis? Placeat
          inventore in sint ex. Provident numquam iure iusto obcaecati
          cupiditate molestias earum.Provident numquam iure iusto obcaecati
          cupiditate molestias earum.Provident numquam iure iusto obcaecati
          cupiditate molestias earum.Provident numquam iure iusto obcaecati
          cupiditate molestias earum.
        </Text>
      </View>
    </View>
  );
};

export default AboutDetails;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  line: {
    borderBottomColor: '#c4c4c4',
    borderBottomWidth: 0.5,
    marginHorizontal: 10,
  },
  button: {
    fontSize: 16,
    color: 'orange',
  },
  acordionTitleContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  chevron: {
    marginLeft: 20,
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
});
