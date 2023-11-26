/* -------------- Libraries - React ------------- */
import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
/* -------------- Containers ------------- */
import SplashScreen from '../view/SplashScreenContainer';
import Login from '../view/LoginContainer';
 import Dashboard from '../view/DashboardContainer';
/* ------------------ Utilities ----------------- */
import { getHeaderHeight } from '../../utilities/helpers/Platform';
import { configureGradientHeader } from '../../utilities/helpers/Navigation';
import NavigationService from './NavigationService';
import MainStackNavigator from './MainStackNavigator';


const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerMode: 'screen',
          animationEnabled: Platform.OS !== 'android',
          header: configureGradientHeader,
          headerStyle: {
            height: getHeaderHeight(),
          },
          cardStyle: {
            backgroundColor: 'white',
          },
        }}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        /> 

        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />

        <Stack.Screen
          name="MainStackNavigator"
          component={MainStackNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;