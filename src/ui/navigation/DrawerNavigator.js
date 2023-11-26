/* eslint-disable react/no-unstable-nested-components */
/* -------------- Libraries - React ------------- */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
/* ------------ Container Components ------------ */
import Menu from '../view/DrawerContainer/components/Menu';
/* ----------------- Containers ----------------- */
import MainTabNavigator from './MainTabNavigator'; 

const DrawerMenu = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            swipeEdgeWidth={0}
            drawerContent={() => <Menu />}
            drawerStyle={{ width: '80%' }}
            overlayColor="transparent"
            screenOptions={{
                headerShown: false,
                drawerType: 'front',
                drawerPosition: 'right',
                defaultStatus: 'closed',
                swipeEnabled: false,
            }}
        > 
            <Drawer.Screen name="MainTabNavigator" component={MainTabNavigator} /> 
        </Drawer.Navigator>
    );
};

export default DrawerMenu;
