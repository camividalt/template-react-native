/**
 * @format
 */
import React, {useEffect} from 'react';
import {AppRegistry} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import App from './src/App';
import AppWeb from './App';
import {name as appName} from './app.json';
import {
  isIosPlatform,
  isAndroidPlatform,
} from './src/utilities/helpers/Platform';

const AppComponent = App;

const AppFake = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return null;
};

const HeadlessCheck = ({isHeadless}) => {
  if (isHeadless) {
    // App has been launched in the background by iOS, ignore
    return <AppFake />;
  }

  return <AppComponent />;
};

// isIosPlatform || isAndroidPlatform
//   ? AppRegistry.registerComponent(appName, () => HeadlessCheck)
//   : AppRegistry.registerComponent(appName, () => AppWeb);
AppRegistry.registerComponent(appName, () => HeadlessCheck);
