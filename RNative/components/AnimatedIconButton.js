import React,{useState, useRef} from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Ionicons'


const AnimatedIcon = Animatable.createAnimatableComponent(Icon)


const AnimatedIconButton = ({namePrimary,nameSecondary, colorPrimary,colorSecondary,size,data,func}) => {

    const [active,setActive]= useState(false);
    const iconRef = useRef(null);

    const handleOnPress = () => {
      
      iconRef.current.bounceIn()
      setActive(!active)
      func()

    }

    return (
        <TouchableOpacity
            style = {styles.container}
            activeOpacity={1}
            onPress={()=>handleOnPress()}
          >
          <AnimatedIcon
              ref={iconRef}
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
