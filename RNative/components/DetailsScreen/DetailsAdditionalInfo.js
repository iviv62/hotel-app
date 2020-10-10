/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const DetailsAdditionalInfo = () => {
    return (
        <View>
            <Text style={styles.title}>Additional Details</Text>

            <View style={styles.infoRow}>
                <View style={styles.infoColumn} >
                    <Text style={styles.detailTitle}>Age of property</Text>
                    <Text style={styles.detailText} >5 years</Text>
                </View>
                <View style={styles.infoColumn} >
                    <Text style={styles.detailTitle}>Built up Area</Text>
                    <Text style={styles.detailText} >1342 sq ft.</Text>
                </View>
            </View>

            <View style={styles.infoRow}>
                <View style={styles.infoColumn} >
                    <Text style={styles.detailTitle}>Floors</Text>
                    <Text style={styles.detailText} >2</Text>
                </View>
                <View style={styles.infoColumn} >
                    <Text style={styles.detailTitle}>Some other property</Text>
                    <Text style={styles.detailText} >example....</Text>
                </View>
            </View>
            <View style={styles.line} />
        </View>
        
    )
}

export default DetailsAdditionalInfo

const styles = StyleSheet.create({

    title:{
        fontSize:20,
        fontWeight:"bold",
        marginLeft:10,
    },
    line:{
        borderBottomColor: '#c4c4c4',
        borderBottomWidth: 0.5,
        marginHorizontal:10,  
    },
    infoRow:{
        marginLeft:10,
        marginVertical:15,
        flexDirection:"row",
    },
    infoColumn:{
        flex:1,
    },
    detailTitle:{
        color:"orange",
        fontSize:16,
        fontWeight:"bold",
    },
    detailText:{
        color:"black",
        fontSize:14,
    },

})
