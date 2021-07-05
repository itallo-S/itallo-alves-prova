import { StatusBar } from 'expo-status-bar';
import React from 'react';
//  @react-nacigation/drawer
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
// Pages
import Home from './src/screens/Home'
import ContentBlocks from './src/screens/ContentBlocks'
import DefaultCards from './src/screens/DefaultCards'
import PrincingTables from './src/screens/PrincigTables'
import Forms from './src/screens/Forms'
// Components
import Header from './src/components/Header';

const Drawer = createDrawerNavigator();

function HomePage({ navigation }) {
  return (
    <>
      <StatusBar hidden />
      <Header drawer={() => navigation.openDrawer()} />
      <Home />
    </>
  );
}
function ContentBlocksPage({ navigation }) {
  return (
    <>
      <StatusBar hidden />
      <Header drawer={() => navigation.openDrawer()} />
      <ContentBlocks/>
    </>
  );
}
function DefaultCardsPage({ navigation }) {
  return (
    <>
      <StatusBar hidden />
      <Header drawer={() => navigation.openDrawer()} />
      <DefaultCards/>
    </>
  );
}
function PrincingTablesPage({ navigation }) {
  return (
    <>
      <StatusBar hidden />
      <Header drawer={() => navigation.openDrawer()} />
      <PrincingTables/>
    </>
  );
}
function FormsPage({ navigation }) {
  return (
    <>
      <StatusBar hidden />
      <Header drawer={() => navigation.openDrawer()} />
      <Forms/>
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
          <Drawer.Screen name='Dashboard' component={HomePage}/>
          <Drawer.Screen name='Default cards' component={DefaultCardsPage}/>
          <Drawer.Screen name='Princig tables' component={PrincingTablesPage}/>
          <Drawer.Screen name='Content blocks' component={ContentBlocksPage} />
          <Drawer.Screen name='Forms' component={FormsPage} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  )
}