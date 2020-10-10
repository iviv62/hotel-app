/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native'


const { width } = Dimensions.get("window");
const height = width * 0.6

const images = [
    "https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g",
    "https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE",
    "https://i.picsum.photos/id/1004/5616/3744.jpg?hmac=Or7EJnz-ky5bsKa9_frdDcDCR9VhCP8kMnbZV6-WOrY",


]

const Swiper = () => {

    const [active, setActive] = useState(0)

    const change = ({nativeEvent})=> {
        const slide=Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);

        if(slide!==active){
            setActive(slide);
        }
    }

    return (
        <View style={styles.container} >

            <ScrollView
                pagingEnabled
                horizontal
                onScroll={change}
                showsHorizontalScrollIndicator={false}
                style={styles.container}>
                {images.map(
                    (img,index)=><Image key={index} source={{uri:img}} style={styles.image}/>
                )}
               
            </ScrollView>
            <View style={styles.pagination}>
                {images.map(
                    (i, k) => 
                    <Text key={k} style={ k=== active? styles.pagingActiveText: styles.pagingText}>•</Text>
                )
                }
            </View>
        </View>
    )
}




export default Swiper

const styles = StyleSheet.create({
    container: {
     height,
      width,
    },
    image: {
     height,
     width
    },
    pagination: {
        flexDirection:"row",
        position: "absolute",
        bottom: 0,
        alignSelf: "center"
    },
    pagingText: {
        fontSize:50,
        color: "white",
        margin: 3,
    },
    pagingActiveText: {
        fontSize:50,
        color: "orange",
        margin: 3,
    },



})
