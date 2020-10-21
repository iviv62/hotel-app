import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Sae} from 'react-native-textinput-effects';
import {CREATE_USER} from '../../../constants/query';
import {useMutation} from '@apollo/client';


const RegistrationScreen = () => {
  let [errortext, setErrortext] = useState('');
  let [userName, setUserName] = useState('');
  let [userEmail, setUserEmail] = useState('');
  let [userPassword, setUserPassword] = useState('');
  let [userConfirmPassword, setUserConfirmPassword] = useState('');
  //use loading from mutation instead
  let [loadingIndictor, setLoadingIndictor] = useState(false);
  const [createUser, {loading, error}] = useMutation(CREATE_USER, {
  //                  -------
    onCompleted({email, username}) {
      console.log(email + ' hi ' + username);
    },
  });

  if (error) {
    console.log('error');
  }

  const handleRegistrationPress = () => {
    setErrortext('');

    if (!userName) {
      alert('Please fill Username');
      return;
    }

    if (!userEmail) {
      alert('Please fill Email');
      return;
    }

    if (!userPassword) {
      alert('Please fill Pasword');
      return;
    }

    if (!userConfirmPassword) {
      alert('Please fill Confirm Pasword');
      return;
    }

    if (userPassword != userConfirmPassword) {
      alert('Password and confirm password is not same!');
      return;
    }

    createUser({
      variables: {email: userEmail, password: userPassword, username: userName},
    });

    //setLoading(true);
  };

  return (
    <View style={styles.screen}>
    {/*use loadingIndicator &&  (......)*/}
      {loadingIndictor ? (
        <ActivityIndicator
          size="large"
          color="#ffa500"
          style={styles.loading}
        />
      ) : null}
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.textInputsContainer}>
          <Sae
            label={'User Name'}
            iconClass={MaterialIcons}
            iconName={'email'}
            iconColor={'orange'}
            inputPadding={16}
            labelHeight={24}
            labelStyle={{color: '#000000'}}
            borderHeight={2}
            autoCapitalize={'none'}
            autoCorrect={false}
            inputStyle={{color: '#A9A9A9'}}
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => {
              this.registerEmail.focus();
            }}
            onChangeText={(UserName) => setUserName(UserName)}
          />

          <Sae
            label={'Email Address'}
            iconClass={MaterialIcons}
            iconName={'email'}
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
            blurOnSubmit={false}
            ref={(registerEmail) => {
              this.registerEmail = registerEmail;
            }}
            onSubmitEditing={() => {
              this.registerPassword.focus();
            }}
            onChangeText={(UserEmail) => setUserEmail(UserEmail)}
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
            inputStyle={{color: '#A9A9A9'}}
            returnKeyType="next"
            ref={(registerPassword) => {
              this.registerPassword = registerPassword;
            }}
            blurOnSubmit={false}
            onSubmitEditing={() => {
              this.confirmPassword.focus();
            }}
            onChangeText={(UserPassword) => setUserPassword(UserPassword)}
          />

          <Sae
            label={'Confirm Password'}
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
            inputStyle={{color: '#A9A9A9'}}
            ref={(confirmPassword) => {
              this.confirmPassword = confirmPassword;
            }}
            onChangeText={(UserConfirmPassword) =>
              setUserConfirmPassword(UserConfirmPassword)
            }
          />
        </View>

        {errortext != '' ? (
          <Text style={styles.errorTextStyle}> {errortext} </Text>
        ) : null}

        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={handleRegistrationPress}>
          <Text style={styles.buttonTextStyle}>Sign-Up</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
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
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RegistrationScreen;
