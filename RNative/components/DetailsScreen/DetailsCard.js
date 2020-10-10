/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View,Image,ScrollView,SafeAreaView } from 'react-native'
import house from "../icons/house.jpg"
import bed from "../icons/bed.png"
import bath from "../icons/bath-tub.png"
import DetailsAdditionalInfo from "./DetailsAdditionalInfo"
import OwnerDetails from "./OwnerDetails"
import Swiper from "./Swiper"

const DetailsCard = () => {
    return (
        
        <View  >
        
        <Swiper/>
        <View style={styles.card}>
            
            <Text style={styles.title}>
            Detached House 5y old, 3 Bedrooms and 2 Bathrooms, 2 floors
            </Text>
            <View style={styles.line}/>
            <Text style={styles.price}>
            Price $750,000
            </Text>
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
            <DetailsAdditionalInfo/>
            <OwnerDetails/>
        </View>
       
        </View>
     
    )
}



const styles = StyleSheet.create({
   
    img:{
        width:"100%",
        height:200,
        resizeMode:"cover",    
    },
    card:{ 
        backgroundColor:"white",
        borderRadius:10,
        marginTop: -15,
    },
    title:{
        fontSize:18,
        marginHorizontal:30,
        marginVertical:10,
        color:"black",
        fontWeight:"bold",
    },
    price:{
        fontSize:18,
        color:"black",
        fontWeight:"bold",
        marginVertical:20,
        alignSelf:"center",

    },
    line:{
        borderBottomColor: '#c4c4c4',
        borderBottomWidth: 0.5,
        marginHorizontal:10,  
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
    }

})
export default DetailsCard