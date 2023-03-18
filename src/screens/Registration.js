/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {View} from 'react-native';
import {StatusBar} from 'react-native';
import {Text} from 'react-native';
import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';
import {Checkbox} from 'react-native-paper';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import Colors from '../constants/Colors';

const Registration = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const [confirmPass, setConfirmpass] = useState();
  const [checked, setChecked] = React.useState(false);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.mainColor} />
      <View style={styles.topBar}>
        <Text style={styles.registerText}>Register with skenu</Text>
      </View>
      <View>
        <FormInput
          labelValue={username}
          onChangeText={() => {}}
          placeholderText={'Username'}
          keyboardType="email-address"
        />
      </View>

      <View>
        <FormInput
          labelValue={email}
          onChangeText={() => {}}
          placeholderText={'Email'}
          keyboardType="email-address"
        />
      </View>

      <FormInput
        labelValue={password}
        onChangeText={() => {}}
        placeholderText={'Password'}
        secureTextEntry={true}
      />

      <FormInput
        labelValue={confirmPass}
        onChangeText={() => {}}
        placeholderText={'Confirm Password'}
        secureTextEntry={true}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'flex-start',
          position: 'absolute',
          marginTop: 515,
          marginLeft: 30,
        }}>
        <Checkbox
          color={Colors.mainColor}
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text style={{color: Colors.white}}>Agree terms and condition</Text>
      </View>
      <FormButton
        buttonTitle={'Register'}
        onPress={() => {
          navigation.navigate('LogIn');
        }}
      />
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingHorizontal: 35,
    backgroundColor: Colors.backColor,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  topBar: {
    alignItems: 'center',
    backgroundColor: Colors.mainColor,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: Dimensions.get('window').width,
    height: 71,
    marginTop: -75,
  },
  registerText: {
    color: '#000000',
    marginTop: 35,
    width: 192,
    height: 27,
    fontFamily: 'Open Sans',
    fontWeight: 700,
    fontSize: 20,
    textAlign: 'center',
  },
});
