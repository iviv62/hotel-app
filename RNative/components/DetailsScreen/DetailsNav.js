/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'
import ArrowLeft from "../icons/left-arrow.png"
import share from "../icons/share.png"
import heart from "../icons/heart-shape-outline.png"


export default function DetailsNav() {
    const pr = () => {

    }

    return (
        <View style={styles.nav} elevation={5}>
            <TouchableHighlight
                activeOpacity={0.5}
                underlayColor="#DDDDDD"
                onPress={pr}
                style={styles.arrowLeftContainer}>
                <Image source={ArrowLeft} style={{ width: 30, height: 30, }} />
            </TouchableHighlight>
            <Text style={styles.title}>Title</Text>
            <TouchableHighlight
                activeOpacity={0.5}
                underlayColor="#DDDDDD"
                onPress={pr}
                style={styles.rightIconsContainer}>
                <Image source={share} style={{ width: 20, height: 20, }} />
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.5}
                underlayColor="#DDDDDD"
                onPress={pr}
                style={styles.rightIconsContainer}>
                <Image source={heart} style={{ width: 20, height: 20, }} />
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        borderBottomColor: "black",
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 2,
            width: 2
        }


    },
    arrowLeftContainer: {
        height: 40,
        width: 40,
        borderRadius: 60,
        marginHorizontal: 20,
        marginVertical: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: 'center'
    },
    rightIconsContainer: {
        height: 40,
        width: 40,
        borderRadius: 60,
        marginHorizontal: 5,
        alignSelf: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center'
    },
    title: {
        flex: 2,
        alignSelf: "center",
        fontSize: 18,
        fontWeight: "bold",
        color: "orange",


    }


})
