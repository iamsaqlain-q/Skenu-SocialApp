import React, {useContext, useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native';
import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import {AuthContext} from '../navigations/AuthProvider';

const LogIn = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {login} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Image source={require('../assets/background.png')} style={styles.img} />
      <View style={styles.credentialView}>
        <Text style={styles.signinText}>Sign in to your account</Text>
        <TextInput
          value={email}
          onChangeText={text => {
            setEmail(text);
          }}
          placeholder="Email"
          placeholderTextColor="grey"
          keyboardType="email-address"
          style={[styles.input, {margin: 50}]}
        />

        <TextInput
          value={password}
          onChangeText={text => {
            setPassword(text);
          }}
          placeholder="Password"
          placeholderTextColor="grey"
          secureTextEntry={true}
          style={[styles.input, {marginBottom: 50}]}
        />

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            login(email, password);
          }}>
          <Text style={styles.btnText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },

  img: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  credentialView: {
    padding: 30,
    position: 'absolute',
    backgroundColor: Colors.white,
    width: Dimensions.get('window').width / 1.1,
    height: 441,
    borderRadius: 9,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signinText: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: 13,
    color: '#011D45',
  },
  input: {
    width: '100%',
    height: 45,
    color: 'grey',
    borderWidth: 2,
    borderColor: '#F8CE58',
    paddingHorizontal: 15,
  },
  loginBtn: {
    width: '100%',
    height: 40,
    backgroundColor: '#011D45',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#F8CE58',
    fontWeight: 900,
  },
});
