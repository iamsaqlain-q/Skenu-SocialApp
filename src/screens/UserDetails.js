import React, {useContext} from 'react';
import {StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import Colors from '../constants/Colors';
import {AuthContext} from '../navigations/AuthProvider';

function UserDetails() {
  const {user} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>User Details</Text>
      </View>
      <Text style={{color: '#333'}}> usermail : {user.email}</Text>
      <Text style={{color: '#333'}}> userid: {user.uid}</Text>
      <Text style={{color: '#333'}}> isNewUser : {user.isNewUser}</Text>
      <Text style={{color: '#333'}}>lastSignInTime: {user.lastSignInTime}</Text>
      <Text style={{color: '#333'}}>phoneNumber : {user.phoneNumber}</Text>
    </View>
  );
}

export default UserDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
  },
  heading: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.mainColor,
  },
  headingText: {
    width: '100%',
    height: 50,
    textAlign: 'center',
    color: Colors.white,
    fontSize: 20,
  },
});
