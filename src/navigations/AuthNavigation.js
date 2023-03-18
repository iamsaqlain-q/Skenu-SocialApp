/* eslint-disable no-unused-vars */
import 'react-native-gesture-handler';
import React from 'react';
import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Registration from '../screens/Registration';
import LogIn from '../screens/LogIn';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="LogIn"
        component={LogIn}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  },
});
