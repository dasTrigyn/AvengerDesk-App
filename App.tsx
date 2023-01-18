import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import Router from './router/index';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen';
import Profile from './Screens/Profile';
import Search from './Screens/Search';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const BottomTabs = ()=>{
  return (
    <Tab.Navigator initialRouteName="HomeScreen">
    <Tab.Screen name="HomeScreen" component={HomeScreen} />
    {/* <Tab.Screen name="Profile" component={Profile} />
    <Tab.Screen name="Ticket" component={Ticket} />
    <Tab.Screen name="search" component={Search} /> */}
  </Tab.Navigator>
    
  )
}
const HomeScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};


export default function App() {
  return (
    // <NavigationContainer>
    //   <StatusBar animated={true}
    //     backgroundColor="#61dafb"
    //     barStyle={'light-content'}
        
    //     />
    //   <Router />
      
    // </NavigationContainer>

    <NavigationContainer>
        {/* <StatusBar animated={true}
        backgroundColor="#61dafb"
        barStyle={'light-content'}
        /> */}
      <Drawer.Navigator >
      <Drawer.Screen name="HomeScreenStack" component={HomeScreenStack} />
      {/* <Drawer.Screen name="Home" component={HomeScreen} /> */}
    </Drawer.Navigator>
    </NavigationContainer>
    
    
  
  );
}

const styles = StyleSheet.create({
  
});
