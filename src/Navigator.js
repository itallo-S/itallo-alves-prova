import React from 'react';

//  @react-nacigation/drawer
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home'
import Produto from './screens/Produto';

const Drawer = createDrawerNavigator();

export default function DrawerScreen({Navigation}) {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='ScreenA'>
                <Drawer.Screen name='ScreenA' component={Home}/>
                <Drawer.Screen name='ScreenB' component={Produto}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}