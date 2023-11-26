/* -------------- Libraries - React ------------- */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
/* -------------- Navigators ------------- */
import DrawerNavigator from './DrawerNavigator';
// import WebViewNavigator from './WebViewNavigator';

const MainStackNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="DrawerNavigator"
            screenOptions={{
                headerMode: 'screen',
            }}
        >
            <Stack.Screen
                name="DrawerNavigator"
                component={DrawerNavigator}
                options={{ headerShown: false }}
            />

            {/* <Stack.Screen
                name="WebViewNavigator"
                component={WebViewNavigator}
                options={{ headerShown: false }}
            /> */}
        </Stack.Navigator>
    );
};

export default MainStackNavigator;
