import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = props => {
  return (
    <View style={styles.input}>
      <View
        style={{
          height: 50,
          width: '15%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name={props.icon} size={18} backgroundColor="black" />
      </View>
      <View style={{height: 50, width: '85%'}}>
        <TextInput placeholder={props.name} onChangeText={props.onChange} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '90%',
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 20,
    flexDirection: 'row',
  },
});
export default Input;
