import React from 'react';
import {Dimensions} from 'react-native';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

const FormButton = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};
export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: Dimensions.get('window').width / 1.1,
    height: 55,
    backgroundColor: Colors.btnBack,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    color: Colors.white,
  },
});
