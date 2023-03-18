import React from 'react';
import {Dimensions} from 'react-native';
import {View, TextInput, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

const FormInput = ({labelValue, placeholderText, ...rest}) => {
  return (
    <View>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor={Colors.white}
        {...rest}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  input: {
    padding: 10,
    fontSize: 15,
    fontFamily: 'Lato-Regular',
    backgroundColor: Colors.btnBack,
    color: Colors.white,
    width: Dimensions.get('window').width / 1.1,
    height: 55,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
