/* -------------- Libraries - React ------------- */
import React from 'react';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
/* ------------------- Stores ------------------- */
import {store} from './data/services/store';
/* ----------------- Navigation ---------------- */
import RootNavigator from './ui/navigation/RootNavigator';
import LoadingSpinner from './ui/components/LoadingSpinner';

if (!__DEV__) {
  console.log = () => {};
}

const App = () => {
  return (
    <Provider store={store} loading={<LoadingSpinner />}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
