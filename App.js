/* eslint-disable no-unused-vars */
import 'react-native-gesture-handler';
import React from 'react';
import {Dimensions} from 'react-native';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Registration from './src/screens/Registration';
import LogIn from './src/screens/LogIn';
import Home from './src/screens/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
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
        <Stack.Screen
          name="Home"
          component={Home}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  },
});
