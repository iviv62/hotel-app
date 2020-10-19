import React,{useState, useRef} from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Ionicons'


const AnimatedIcon = Animatable.createAnimatableComponent(Icon)


const AnimatedIconButton = ({namePrimary,nameSecondary, colorPrimary,colorSecondary,size}) => {

    const [active,setActive]= useState(false);

    const handleOnPress = () => {
      
      this.iconRef.bounceIn()
      setActive(!active)

    }

    return (
        <TouchableOpacity
            style = {styles.container}
            activeOpacity={1}
            onPress={()=>handleOnPress()}
          >
          <AnimatedIcon
              ref={handleSmallAnimatedIconRef => this.iconRef=handleSmallAnimatedIconRef}
              name={active ? nameSecondary : namePrimary}
              color={active ? colorSecondary : colorPrimary}
              size={size}
              style={styles.icon}
            />
          
          </TouchableOpacity>
    );


    
}

export default AnimatedIconButton

const styles = StyleSheet.create({
  container:{
    alignItems:"center",
    justifyContent:"center",
  },

})
