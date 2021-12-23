import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacityComponent,
  Alert,
} from 'react-native';
import Input from '../components/Input';
const Login = props => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');

  const destination = () => {
    if (name === '' && age === '' && contact === '' && email === '') {
      props.navigation.navigate('Confirmation');
    } else {
      Alert.alert('Fill All Fields');
    }
  };

  return (
    <ScrollView style={styles.scroll}>
      <View style={{height: 30}}></View>
      <View style={styles.input}>
        <Input
          icon="rename-box"
          name="Enter Your Name"
          onChange={value => setName(value)}
        />
        <Input
          icon="face-agent"
          name="Enter Your Age"
          onChange={value => setAge(value)}
        />
        <Input
          icon="contacts"
          name="Enter Your Contact"
          onChange={value => setContact(value)}
        />
        <Input
          icon="email"
          name="Enter Your mail"
          onChange={value => setEmail(value)}
        />
      </View>

      <View style={{height: 30}}></View>
      <TouchableOpacity onPress={destination}>
        <View style={styles.button}>
          <Text style={{color: 'black'}}>Done</Text>
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
