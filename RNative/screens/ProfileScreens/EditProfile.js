import React,{useState,useEffect} from 'react'
import { Text,StyleSheet,View,Image } from 'react-native'
import * as myConstClass from '../../constants/constants';
import { TextInput } from 'react-native-paper';
import {GET_USER} from '../../constants/query';
import {useMutation,useQuery} from '@apollo/client';
import {user} from '../../constants/storage';
import {useReactiveVar} from '@apollo/client';
import { Button } from 'react-native-paper';
const profile = myConstClass.profilePicture;


const EditProfile = ({navigation}) => {
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [surname, setSurname] = React.useState('');
   
    let userInfo = useReactiveVar(user);
    let id=parseInt(userInfo.id);

    useEffect(() => {
        
        return () => {
            setEmail("");
            setPhone("");
            setSurname("");
            setName("");
        }
    }, [navigation])
    
    const { loading, error } = useQuery(GET_USER, 
        {variables:{id:id},
        fetchPolicy: "network-only",
        onCompleted: data => {
            setEmail(data.user.email);
            setPhone(data.user.phone);
            setSurname(data.user.lastName);
            setName(data.user.lastName);
         },
      });
  if (loading) return  <Text>loading....</Text>;
  if (error) return <Text>Error :(</Text>;

    return (
        <View style={styles.container}>

            <View style={styles.top}>
                <Text style={styles.title}>
                    Edit profile 
                </Text>
                <Image source={profile} style={styles.profile_pic} />
            </View>  
            
            <Text style={styles.h3}>
                Personal information
                
            </Text>
            <View style={styles.form}>
            <TextInput
                label="Email"
                value={email}
                onChangeText={email => setEmail(email)}
            />
           
            <TextInput
                label="Phone"
                value={phone}
                onChangeText={phone => setPhone(phone)}
            />
            <TextInput
                label="Name"
                value={name}
                onChangeText={name => setName(name)}
            />
            <TextInput
                label="Surname"
                value={surname}
                onChangeText={surname => setSurname(surname)}
            />
            <Button style={styles.btn} mode="contained" onPress={() => console.log('Pressed')}>
            Update
          </Button>
            
            
            </View>
            



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eaeaea"
    },
    title: {
      marginTop: 16,
      paddingVertical: 8,
      color: "#20232a",
      fontSize: 30,
      fontWeight: "bold"
    },
    profile_pic: {
        marginTop: 22,
        width: 40,
        height: 40,
        borderRadius: 60,
    },
    top:{
        marginHorizontal:10,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    h3:{
        marginTop:10,
        marginHorizontal:10,
        fontSize: 15,
    },
    form:{
        marginTop:10,
        marginHorizontal:10,
    },
    btn:{
        marginTop:20,
        marginHorizontal:"20%",
    },
  });
export default EditProfile
