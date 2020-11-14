import React,{useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-paper';
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import { Button } from 'react-native-paper';

const FilterScreen = () => {


  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('');


  const [multiSliderValue, setMultiSliderValue] = useState([1, 500000])

  const multiSliderValuesChange = (values) => setMultiSliderValue(values)


  return (
    <View style={styles.screen}>
    <View style = {{flexDirection:"row"}}>
      <Text style = {styles.title}>Filter</Text>
      <View style = {{flexDirection:"row", justifyContent:"flex-end",flex:1,marginRight:20}}>
      <Button style= {styles.btn}  color="black"  onPress={() => console.log('Pressed')}>
      Reset
    </Button>
    <Button style= {styles.btn} icon="filter" mode="contained" color="orange"  onPress={() => console.log('Pressed')}>
      Filter
    </Button>
    </View>
      </View>
        <View style = {styles.inputCointainer}>
          <TextInput
          label="City"
          value={city}
          style={styles.input}
          selectionColor="orange"
          theme={{colors: {primary: 'orange'}}}
          underlineColor="orange"
          onChangeText={city => setCity(city)}
        />
        <TextInput
          label="Address"
          value={address}
          style={styles.input}
          selectionColor="orange"
          theme={{colors: {primary: 'orange'}}}
          underlineColor="orange"
          onChangeText={address => setAddress(address)}
        />

        <TextInput
        label="Owner Name"
        value={ownerName}
        style={styles.input}
        selectionColor="orange"
        theme={{colors: {primary: 'orange'}}}
        underlineColor="orange"
        onChangeText={ownerName => setOwnerName(ownerName)}
      />

      <TextInput
      label="Owner Phone"
      value={ownerPhone}
      style={styles.input}
      selectionColor="orange"
      theme={{colors: {primary: 'orange'}}}
      underlineColor="orange"
      onChangeText={ownerPhone => setOwnerPhone(ownerPhone)}
    />

        
        <View style={styles.sliderContainer}>
        <View style = {styles.labelWrapper }>
        <Text>{multiSliderValue[0]}$</Text>
        <Text>Price</Text>
        <Text>{multiSliderValue[1]}$</Text>
        </View>
        <MultiSlider
      
        markerStyle={{
          ...Platform.select({
            android: {
              
              height: 20,
              width: 20,
              borderRadius: 50,
              backgroundColor: 'orange'
            }
          })
        }}
        pressedMarkerStyle={{
          ...Platform.select({
            android: {
              height: 30,
              width: 30,
              borderRadius: 20,
              backgroundColor: 'orange'
            }
          })
        }}
        selectedStyle={{
        
          backgroundColor: 'orange'
        }}
        trackStyle={{
        
          backgroundColor: '#CECECE'
        }}
        touchDimensions={{
        
          height: 40,
          width: 40,
          borderRadius: 20,
          slipDisplacement: 100
        }}
        values={[multiSliderValue[0], multiSliderValue[1]]}
       
        onValuesChange={multiSliderValuesChange}
        min={1}
        max={500000}
        allowOverlap={false}
        minMarkerOverlapDistance={1}
      />
      </View>

        

     
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    color: 'orange',
    marginLeft: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
  btn:{
    fontSize: 25,
    color: 'orange',
    marginLeft: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
  inputCointainer:{
    flex:1,
    marginHorizontal:20,
    marginVertical:20,
    
  },
  sliderContainer:{
    alignSelf:"center",
  },
  labelWrapper:{
    flexDirection:"row",
    justifyContent:"space-between" ,
    padding: 20
  },
  input:{
    marginTop:5
    }

  
});

export default FilterScreen;
