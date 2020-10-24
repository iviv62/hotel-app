import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Sae} from 'react-native-textinput-effects';
import {TOKEN_AUTHENTICATION,GET_LOGGED_USER} from '../../../constants/query';
import {useMutation} from '@apollo/client';
import LoadingComponent from '../../../components/LoadingComponent';

import {user} from '../../../constants/storage';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const passwordInput = useRef(null);
  const usernameInput = useRef(null);

  const [Login, {loading, error},client] = useMutation(TOKEN_AUTHENTICATION);

  {/*const saveUserState = (user)=>{
    client.writeQuery({
    query:GET_LOGGED_USER,
    data:{user:user}
    
    })
  }*/}

  const Submit = async () => {
    let response = await Login({
      variables: {username: username, password: password},
    });

      response.data.tokenAuth.user.token=response.data.tokenAuth.token
    

    await AsyncStorage.setItem(
      'user',
      JSON.stringify(response.data.tokenAuth.user)
    )
    
    user([response.data.tokenAuth.user]);
  };

  return (
    <View style={styles.screen}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.textInputsContainer}>
          <Sae
            label={'Username'}
            iconClass={FontAwesome5}
            iconName={'user'}
            iconColor={'orange'}
            inputPadding={16}
            labelHeight={24}
            labelStyle={{color: '#000000'}}
            borderHeight={2}
            autoCapitalize={'none'}
            autoCorrect={false}
            keyboardType="email-address"
            inputStyle={{color: '#A9A9A9'}}
            returnKeyType="next"
            ref={usernameInput}
            onChangeText={(username) => setUsername(username)}
            onSubmitEditing={() => passwordInput.current.focus()}
            blurOnSubmit={false}
          />
          <Sae
            label={'Password'}
            iconClass={MaterialIcons}
            iconName={'enhanced-encryption'}
            iconColor={'orange'}
            inputPadding={16}
            labelHeight={24}
            labelStyle={{color: '#000000'}}
            borderHeight={2}
            autoCapitalize={'none'}
            autoCorrect={false}
            keyboardType="default"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
            ref={passwordInput}
            inputStyle={{color: '#A9A9A9'}}
          />
          {error && <Text>Please enter valid credentials</Text>}
        </View>

        <TouchableOpacity
          onPress={() => Submit()}
          style={styles.buttonStyle}
          activeOpacity={0.5}>
          <Text style={styles.buttonTextStyle}>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'row',
  },
  textInputsContainer: {
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#ffa500',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});

export default LoginScreen;
