import React from 'react';
import {View, Text, ImageBackground, StyleSheet, Button} from 'react-native';

const Home = props => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/Images/double.jpg')}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <Text style={styles.text}>Welcome To One Alif</Text>
          <Text style={styles.text}>Global</Text>
        </View>
        <View style={{marginBottom: 20}}>
          <Button
            title="Logout"
            onPress={() => {
              props.navigation.navigate('Login');
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
  },
});
export default Home;
