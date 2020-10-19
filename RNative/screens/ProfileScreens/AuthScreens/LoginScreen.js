import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Sae} from 'react-native-textinput-effects';

const LoginScreen = () => {
  return (
    <View style={styles.screen}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.textInputsContainer}>
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
            onSubmitEditing={() => {
              this.password.focus();
            }}
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
            ref={(password) => {
              this.password = password;
            }}
            inputStyle={{color: '#A9A9A9'}}
          />
        </View>

        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
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
