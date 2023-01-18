import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import Profile from '../Screens/Profile';
import Ticket from '../Screens/Ticket';
import Search from '../Screens/Search';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
  return (

    <NavigationContainer>
      <Drawer.Navigator initialRouteName="BottomTabs">
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
    </NavigationContainer>

   
  )
}

// const BottomTabs = ()=>{
//   return (
//     <Tab.Navigator>
//     {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
//     <Tab.Screen name="Profile" component={Profile} />
//     {/* <Tab.Screen name="Ticket" component={Ticket} /> */}
//     <Tab.Screen name="search" component={Search} />
//   </Tab.Navigator>
    
//   )
// }

export default Router ;

function createNativeStackNavigator() {
  throw new Error('Function not implemented.');
}
