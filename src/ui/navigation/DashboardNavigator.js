/* -------------- Libraries - React ------------- */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
/* ------------------ Utilities ----------------- */
import { configureGradientHeader } from '../../utilities/helpers/Navigation';
import { getHeaderHeight } from '../../utilities/helpers/Platform';
/* ----------------- Containers ----------------- */
import Dashboard from '../view/DashboardContainer/DashboardContainer';
import Buttons from '../view/DrawerContainer/ButtonsContainer';
import Texts from '../view/DrawerContainer/TextsContainer';
import Modals from '../view/DrawerContainer/ModalsContainer';
import Forms from '../view/DrawerContainer/FormsContainer';
import Stores from '../view/DrawerContainer/StoresContainer';
/* -----------   Utilities - Styles   ----------- */
import { COLORS, BLUE } from '../../utilities/styles/Colors';

const DashboardNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="Dashboard"
            screenOptions={{
                headerMode: 'screen',
                header: configureGradientHeader,
                headerStyle: { height: getHeaderHeight() },
                cardStyle: { backgroundColor: '#FFFFFF' },
            }}
        >
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Buttons"
                component={Buttons}
                options={{
                    headerBackTitle: null,
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="Texts"
                component={Texts}
                options={{
                    headerBackTitle: null,
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="Modals"
                component={Modals}
                options={{
                    headerBackTitle: null,
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="Forms"
                component={Forms}
                options={{
                    headerBackTitle: null,
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="Stores"
                component={Stores}
                options={{
                    headerBackTitle: null,
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};

export default DashboardNavigator;
