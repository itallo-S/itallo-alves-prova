import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
//  @react-nacigation/drawer
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/screens/Home'
import Produto from './src/screens/Produto';
import Header from './src/components/Header';

const Drawer = createDrawerNavigator();


function firstPage({ navigation }) {
  return (
    <>
      <StatusBar hidden />
      <Header drawer={() => navigation.openDrawer()} />
      <Home />
    </>
  );
}
function secondPage({ navigation }) {
  return (
    <>
      <StatusBar hidden />
      <Header drawer={() => navigation.openDrawer()} />
      <Produto />
    </>
  );
}

export default function DrawerScreen({ Navigation }) {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Dashboard' drawerStyle={{
          backgroundColor: '#eee',
          width: 250,
        }}>
          <Drawer.Screen name='Dashboard' component={firstPage} />
          <Drawer.Screen name='Default cards' component={secondPage} />
          <Drawer.Screen name='Princig tables' component={secondPage} />
          <Drawer.Screen name='Content blocks' component={secondPage} />
          <Drawer.Screen name='Forms' component={secondPage} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  )
}
