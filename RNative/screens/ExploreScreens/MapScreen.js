import React,{useEffect} from 'react'
import { StyleSheet, Text, View,PermissionsAndroid } from 'react-native'
import MapboxGL from '@react-native-mapbox-gl/maps';
import {MAPBOX_KEY} from "../../constants/env/secretKeys"

MapboxGL.setAccessToken(MAPBOX_KEY);
MapboxGL.setConnected(true);

const coordinates = [
    [-73.99155, 40.76975180901395],
    [-73.96682739257812, 40.761560925502806],
    [-74.00751113891602, 40.746346606483826],
    [-73.95343780517578, 40.7849607714286],
    [-73.99017333984375, 40.71135347314246],
    [-73.98880004882812, 40.758960433915284],
    [-73.96064758300781, 40.718379593199494],
    [-73.95172119140624, 40.82731951134558],
    [-73.9829635620117, 40.769101775774935],
    [-73.9822769165039, 40.76273111352534],
    [-73.98571014404297, 40.748947591479705]
  ]

const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Location Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the map");
      } else {
        console.log("map permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }; 

const MapScreen = () => {

    useEffect(() => {
        //requestLocationPermission()
    }, []);


    return (
       
        <View style={styles.container}>
          <MapboxGL.MapView 
          style={styles.map}
          showUserLocation={true}
          >
          <MapboxGL.UserLocation 
          visible={true}
          showsUserHeadingIndicator={true}
           />
          <MapboxGL.Camera
          zoomLevel={11}
          followUserLocation={true}
        />
        {/*<MapboxGL.PointAnnotation coordinate={coordinates[0]} />*/}
         
          </MapboxGL.MapView>
        </View>
      
    )
}

export default MapScreen

const styles = StyleSheet.create({
 
    container: {
      flex:1,
      backgroundColor: "tomato"
    },
    map: {
      flex: 1
    }
  });
