import {loadOptions} from '@babel/core';
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';

import Input from '../components/Input';
const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const LoginHandler = () => {
    if (email === 'Mishaal' && password === '12345') {
      props.navigation.navigate('Drawer');
    } else {
      Alert.alert('Invalid email and Password');
    }
  };

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.header}>
        <Image
          source={require('../assets/Images/pngtree.jpg')}
          style={{height: 100, width: 150}}
        />
      </View>
      <View style={styles.input}>
        <Input icon="email" name="Email" onChange={value => setEmail(value)} />
        <Input
          icon="lock"
          name="Password"
          onChange={value => setPassword(value)}
        />
      </View>
      <View>
        <Text style={styles.text}>Forget Password?</Text>
      </View>
      <View style={{height: 30}}></View>
      <TouchableOpacity onPress={LoginHandler}>
        <View style={styles.button}>
          <Text style={{color: 'black'}}>Login</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scroll: {
    height: '100%',
    width: '100%',
  },
  header: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  text: {
    alignSelf: 'center',
    fontSize: 15,
    color: 'blue',
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginLeft: 20,
  },
});
export default Login;
