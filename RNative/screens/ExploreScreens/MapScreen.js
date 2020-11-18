import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  ActivityIndicator,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import { MAPBOX_KEY } from '../../constants/env/secretKeys';
import { ALL_HOUSES } from '../../constants/query';
import LoadingComponent from '../../components/LoadingComponent';
import { useQuery, gql } from '@apollo/client';
import MapCard from '../../components/ExploreScreen/MapCard';
import AnimatedIconButton from '../../components/AnimatedIconButton';
import {user,favouriteHouses, allHouses,searchedData,filteredData} from './../../constants/storage';
// import { TouchableOpacity } from 'react-native-gesture-handler';

MapboxGL.setAccessToken(MAPBOX_KEY);

MapboxGL.setConnected(true);

const MapScreen = (props) => {
  let cardData = {};
  const [active, setActive] = useState(false);
  const [overlayItem, setOverlayItem] = useState(cardData);
  const [locationPermission, setLocationPermission] = useState(false);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the map');
        setLocationPermission(true);
      } else {
        console.log('map permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const { loading, error, data } = useQuery(ALL_HOUSES);
  if (loading) return <LoadingComponent />;
  if (error) return <Text>Error :(</Text>;
  console.log(data)
  console.log("maps")

  const convertLocation = (location) => {
    let loc = location.replace('(', '').replace(')', '').split(',');
    let result = loc.map((cord) => parseFloat(cord));
    return result;
  };

  const handleSelect = async (item) => {
    let temp = {};
    temp = item;
    await setOverlayItem(temp);
    await setActive(true);
  };

  const handleDeselect = () => {
    setActive(false);
  };

  return (
    <View style={{ flex: 1 }}>
      {locationPermission ? (
        <View style={styles.container}>
          {active && overlayItem && (
            <View
              style={{
                flex: 1,
                width: '80%',
                position: 'absolute',
                bottom: 0,
                flexDirection: 'column',
                justifyContent: 'center',
                alignSelf: 'center',
                zIndex: 10,
              }}>
              <View
                style={{ position: 'absolute', top: 5, right: 5, zIndex: 10 }}>
                <AnimatedIconButton
                  namePrimary={'close-circle'}
                  nameSecondary={'close-circle'}
                  colorPrimary={'black'}
                  colorSecondary={'black'}
                  func={handleDeselect}
                  size={25}
                />
              </View>
              <MapCard
                title={overlayItem.title}
                price={overlayItem.price}
                address={overlayItem.address}
                address={overlayItem.address}
                image={overlayItem.otherImages[0].image}
                city={overlayItem.city}
                location={overlayItem.location}
                onSelect={() =>
                  props.navigation.navigate('ExploreDetail', overlayItem)
                }></MapCard>
            </View>
          )}
          <MapboxGL.MapView
            style={styles.map}
            showUserLocation={true}
            onPress={handleDeselect}>
            <MapboxGL.UserLocation
              visible={true}
              showsUserHeadingIndicator={true}
            />
            <MapboxGL.Camera zoomLevel={1} followUserLocation={true} />
            { allHouses().allHouses.map((item) => (
              <MapboxGL.PointAnnotation
                key={item.id.toString()}
                id={item.id.toString()}
                coordinate={convertLocation(item.location)}
                onSelected={() => handleSelect(item)}
                onDeselected={() => handleSelect(item)}
              />
            ))}
          </MapboxGL.MapView>
        </View>
      ) : <View style={styles.permissionButtonContainer}>

          <TouchableOpacity
            style={styles.permissionButtonStyle}
            activeOpacity={.5}
            onPress={() => requestLocationPermission()}
          >

            <Text style={styles.permissionTextStyle}> allow location </Text>

          </TouchableOpacity>

        </View>}
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
  },
  map: {
    flex: 1,
  },
  permissionButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },

  permissionButtonStyle: {

    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#ffa500',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },

  permissionTextStyle: {
    color: '#fff',
    textAlign: 'center',
  }
});
