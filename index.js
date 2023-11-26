/**
 * @format
 */
import React, { useEffect } from 'react';
import { AppRegistry } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import App from './src/App';
import { name as appName } from './app.json';

const AppComponent = App;

const AppFake = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return null;
}; 

const HeadlessCheck = ({ isHeadless }) => {
    if (isHeadless) {
        // App has been launched in the background by iOS, ignore
        return <AppFake />;
    }

    return <AppComponent />;
};

AppRegistry.registerComponent(appName, () => HeadlessCheck);
