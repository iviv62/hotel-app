/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import location from "../icons/location.png"
import heart from "../icons/heart-colored.png"
import bed from "../icons/bed.png"
import bath from "../icons/bath-tub.png"

const SavedCard = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' }}
                style={styles.image} />
            <Image source={heart} style={styles.top_heart}/>
            <View style={styles.content} >
                <View>
                    <Text style={styles.description} >
                        DETACHED HOUSE ~ 5Y OLD
          </Text>
                    <Text style={styles.price}>
                        $750,000
          </Text>
          <View style={{flexDirection:"row",marginTop:10}}>
          <Image source={location} style={styles.icon_location} />
                    <Text style={styles.street}>
                    
                        Richmond Pines Avenue
                    </Text>
                    </View>

                    <View style={styles.line}/>
                    

                    <View style={styles.roomContainer}>
            
            <View style={styles.roomInfo}>
            <Image source={bed}
            style={styles.roomIcon}
            />
            <Text style={styles.num}>3</Text> 
            <Text style={styles.room}>Bedrooms</Text>
            </View>
             
            
            <View style={styles.roomInfo}>
            <Image source={bath}
            style={styles.roomIcon}
            />
            <Text style={styles.num}>2</Text>
            <Text style={styles.room}>Bathrooms</Text> 
            </View>
            </View>
                    <View style={styles.line}/>
                    <View  style={styles.saved}>
                    <Image source={heart} style={styles.icon_heart} />
                    <Text style={styles.savedText}>
                    Saved on 18.05.2020
                    </Text></View>



                </View>


            </View>
        </TouchableOpacity>
    )
}

export default SavedCard

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginVertical: 15,
        flexDirection:"column",
        backgroundColor: '#f1f1f1',
        borderRadius: 12,

    },
    
    content: {
        backgroundColor: 'white',
        paddingBottom:10,
    },
    image: {
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        resizeMode: "cover",
        height: 200,
    },
    description: {
        fontSize: 13,
        fontWeight: "bold",
        color: "orange",
        margin: 10
    },
    roomContainer:{
        flexDirection:"row",
        display:"flex",
        justifyContent:"space-evenly",
        marginVertical:10,
        
    },
    roomInfo:{
        flexDirection:"row",
        display:"flex",
    },
    roomIcon:{
        width:25,
        height:25,

        marginRight:15
    },
    num:{
        fontWeight:"bold",
        fontSize:18,
        marginRight:5,
      },
    room:{
        fontWeight:"normal",
        fontSize:18,
    },
   
    price: {
        fontSize: 19,
        fontWeight: 'bold',
        paddingLeft: 10,
    },
    street: {
        
        color: "gray",
        paddingLeft: 10,
    },
    icon_heart:{
        width:20,
        height:20,
        marginLeft:10,
        marginTop:10,
    },
    icon_location:{
        width:20,
        height:20,
        marginLeft:10,
    },
    top_heart:{
        position:"absolute",
        width:30,
        height:30,
        top:15,
        right:15,
    },
    line: {
        borderBottomColor: "#c4c4c4",
        marginHorizontal:10,
        padding: 2,
        borderBottomWidth: 1,
        marginTop:5,
    },
    savedText:{
        marginLeft:10,
        color:"gray",
        marginHorizontal:10,
        marginTop:10,
    },
    saved:{
        flexDirection:"row",
    
    },
   


});