/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import * as myConstClass from "../../constants/constants"
import AsyncStorage from '@react-native-async-storage/async-storage';

const profile = myConstClass.profilePicture

const Profile = () => {
    const clearAll = async () => {
        try {
          await AsyncStorage.clear()
        } catch(e) {
          // clear error
        }
      
        console.log('Done.')
      }
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Profile</Text>
            <View style={styles.profile_container}>
                <Image source={profile} style={styles.profile_pic} />
            </View>
            <View style={styles.options}>
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => alert('Pressed!')}>
                    <View style={styles.option}>
                        <Icon name="pencil-sharp" color={'#ffa500'} size={26} />
                        <Text style={styles.optionText}>Edit profile</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => alert('Pressed!')}>
                    <View style={styles.option}>
                        <Icon name="add-circle-outline" color={'#ffa500'} size={26} />
                        <Text style={styles.optionText}>List property</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => alert('Pressed!')}>
                    <View style={styles.option}>
                        <Icon name="star-half-sharp" color={'#ffa500'} size={26} />
                        <Text style={styles.optionText}>Rate the app</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => alert('Pressed!')}>
                    <View style={styles.option}>
                        <Icon name="trash-outline" color={'#ffa500'} size={26} />
                        <Text style={styles.optionText}>Delete Profile</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => clearAll()}>
                    <View style={styles.option}>
                        <Icon name="log-out-outline" color={'#ffa500'} size={26} />
                        <Text style={styles.optionText}>Log out</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f1f1f1',
        flex: 1,
    },

    header: {
        backgroundColor: 'white',
        height: '30%',
        borderBottomLeftRadius: 80,
        borderBottomRightRadius: 80,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    title: {
        color: 'orange',
        marginTop: 20,
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 25,
    },
    profile_container: {
        flexDirection: "column",
        justifyContent: "center",
        alignSelf: "center",

        padding: 5,

    },
    profile_pic: {
        width: 120,
        height: 120,
        borderRadius: 60

    },
    options: {
        marginTop: 50,
        flex: 1
    },
    optionText: {
        marginLeft: 15,
        fontSize: 20,
        fontWeight: "bold"
    },
    option: {
        marginLeft: 25,
        marginTop: 20,
        flexDirection: "row",

    }
})
