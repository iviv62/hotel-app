/* eslint-disable prettier/prettier */
import React from 'react'
import { View,ScrollView } from 'react-native'
import DetailsNav from "../components/DetailsNav"
import DetailsCard from "../components/DetailsCard"
import AboutDetails from "../components/AboutDetails"

const Details = () => {
    return (
        <View style={{flex:1}}>

                <DetailsNav/>
            <ScrollView>
                <DetailsCard/>
                <AboutDetails/>
            </ScrollView>
           
       </View>
    )
}

export default Details
