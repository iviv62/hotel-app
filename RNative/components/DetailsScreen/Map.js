import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapboxGL from '@react-native-mapbox-gl/maps';

import Icon from 'react-native-vector-icons/Ionicons';

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


const Map = ({city,address,location}) => {
    const converLocation = (location) =>{
        let loc=location.replace("(","").replace(")","").split(",")
        let result= loc.map(cord=>parseFloat(cord))
        return result
    }

    return (
        <View>
        <View style={{flexDirection: 'row', marginTop:20}}>
            <View style={styles.icon_location}>
              <Icon name="location" color={'#ffa500'} size={20} />
              
            </View>
            <Text style={styles.street}>{city}, {address}</Text>
           
          </View>
        <View style={styles.containerMap}>
            <MapboxGL.MapView
                style={{ flex: 1 }}
                attributionEnabled={false}
                logoEnabled={false}
                showUserLocation={true}
            >
                <MapboxGL.Camera
                    zoomLevel={15}
                    centerCoordinate={converLocation(location)}
                />
                <MapboxGL.PointAnnotation
                selected={true}
                onSelected={() => console.log('selected')}
                key="key"
                id="id"
                title="End Location"
                coordinate={converLocation(location)}>
                <Icon name="location" color={'orange'} size={30} />
                
              </MapboxGL.PointAnnotation>
            </MapboxGL.MapView>
        </View>
        </View>
    )
}

export default Map

const styles = StyleSheet.create({
    containerMap: {
        width: "100%",
        height: 200,
        backgroundColor: "tomato"
    },
    map: {
        flex: 1
    },
    icon_location: {
        width: 20,
        height: 20,
      },
      street:{
          fontSize:18,
          color:"orange",
      }
})
