import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../Screen/Home';
import Login from '../Screen/Login';
import Registration from '../Screen/Registration';
import Confirmation from '../Screen/Confirmation';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const DrawerScr = () => {
  return (
    <Drawer.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Drawer.Screen name="Registration" component={Registration} />
      <Drawer.Screen name="Confirmation" component={Confirmation} />
    </Drawer.Navigator>
  );
};
// const BottomScr = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={Home} />
//     </Tab.Navigator>
//   );
// };

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Drawer" component={DrawerScr} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
