import React,{useState, useRef} from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/AntDesign'

const AnimatedIcon = Animatable.createAnimatableComponent(Icon)

const colors = {
    heartColor: '#e92f3c',
    textPrimary: '#515151',
    
  }

const AnimatedIconButton = () => {

    const [active,setActive]= useState(false);
    const handleSmallAnimatedIconRef = useRef();

    const handleOnPress = () => {
        handleSmallAnimatedIconRef.bounceIn()
        setActive(!active)

    }

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={handleOnPress}
          >
            <AnimatedIcon
              ref={handleSmallAnimatedIconRef}
              name={active ? 'heart' : 'hearto'}
              color={active ? colors.heartColor : colors.textPrimary}
              size={25}
              style={styles.icon}
            />
          </TouchableOpacity>
    )
}

export default AnimatedIconButton

const styles = StyleSheet.create({


})
