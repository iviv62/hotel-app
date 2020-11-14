/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AnimatedIconButton from "../AnimatedIconButton"

const SavedCard = (data) => {
  console.log(data.data)

  const dateFormat = (date) =>{
    let d = new Date(date);
    let datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear();
    return datestring
  }

  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{
          uri:
            'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        }}
        style={styles.image}
      />

      <View style={styles.top_heart}>
      <AnimatedIconButton 
      namePrimary={"trash"} 
      nameSecondary={"trash"} 
      colorPrimary={"black"} 
      colorSecondary={"black"}
      size={25}/>
      </View>
      
      <View style={styles.content}>
        <View>
          <Text style={styles.description}>{data.data.house.title}</Text>
          <Text style={styles.price}>{data.data.house.price}</Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={styles.icon_location}>
              <Icon name="location" color={'#ffa500'} size={20} />
            </View>
            <Text style={styles.street}>{data.data.house.city} , {data.data.house.address}</Text>
          </View>
          <View style={styles.line} />

          <View style={styles.roomContainer}>
            <View style={styles.roomInfo}>
              <View style={styles.roomIcon}>
                <Icon name="bed" color={'#ffa500'} size={20} />
              </View>
              <Text style={styles.num}>{data.data.house.bedrooms}</Text>
              <Text style={styles.room}>Bedrooms</Text>
            </View>

            <View style={styles.roomInfo}>
              <View style={styles.roomIcon}>
                <Icon name="bed" color={'#ffa500'} size={20} />
              </View>

              <Text style={styles.num}>{data.data.house.bathrooms}</Text>
              <Text style={styles.room}>Bathrooms</Text>
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.saved}>
            <View style={styles.icon_heart}>
              <Icon name="heart" color={'#ffa500'} size={20} />
            </View>
            <Text style={styles.savedText}>Saved on {dateFormat(data.data.house.createdOn)}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SavedCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 15,
    flexDirection: 'column',
    backgroundColor: '#f1f1f1',
    borderRadius: 12,
  },

  content: {
    backgroundColor: 'white',
    paddingBottom: 10,
  },
  image: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    resizeMode: 'cover',
    height: 200,
  },
  description: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'orange',
    margin: 10,
  },
  roomContainer: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
  roomInfo: {
    flexDirection: 'row',
    display: 'flex',
  },
  roomIcon: {
    width: 25,
    height: 25,

    marginRight: 15,
  },
  num: {
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 5,
  },
  room: {
    fontWeight: 'normal',
    fontSize: 18,
  },

  price: {
    fontSize: 19,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  street: {
    color: 'gray',
    paddingLeft: 10,
  },
  icon_heart: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginTop: 10,
  },
  icon_location: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  top_heart: {
    position: 'absolute',
    width: 30,
    height: 30,
    top: 15,
    right: 15,
  },
  line: {
    borderBottomColor: '#c4c4c4',
    marginHorizontal: 10,
    padding: 2,
    borderBottomWidth: 1,
    marginTop: 5,
  },
  savedText: {
    marginLeft: 10,
    color: 'gray',
    marginHorizontal: 10,
    marginTop: 10,
  },
  saved: {
    flexDirection: 'row',
  },
});
