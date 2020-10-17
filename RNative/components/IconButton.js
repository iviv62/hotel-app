import React from 'react'
import { StyleSheet, Text, View,TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

const IconButton = ({name,size,color}) => {
    return (
        <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#f1f1f1"
        onPress={()=>alert("pressed")}
        style={styles.container}>
            <Icon name={name} size={size} color={color} />
        </TouchableHighlight>
    )
}

export default IconButton

const styles = StyleSheet.create({
    container:{
        padding:5,
        borderRadius:600,
        alignItems:"center",
        justifyContent:"center"
    }
})
