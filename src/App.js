/* -------------- Libraries - React ------------- */
import React, { useState, useEffect } from 'react';
import { AppState } from 'react-native';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
/* ------------------- Stores ------------------- */
import { store } from './data/services/store';
/* ----------------- Navigation ---------------- */
import RootNavigator from './ui/navigation/RootNavigator';
import LoadingSpinner from './ui/components/LoadingSpinner';


if (!__DEV__) {
    console.log = () => {};
}

const App = () => {
    const [onBackground, setOnBackground] = useState(false);

    // useEffect(() => {
    //     const subscription = AppState.addEventListener('change', (nextAppState) => {
    //         setOnBackground(nextAppState !== 'active');
    //     });

    //     return () => {
    //         subscription.remove();
    //     };
    // }, []);

    return (
        // <Provider store={store}>
        //     <PersistGate loading={<CSLoadingSpinner />} persistor={persistor}>
        //         {onBackground ? <CSBlur /> : null}
        //         <RootNavigator />
        //     </PersistGate>
        // </Provider>

        <Provider store={store} loading={<LoadingSpinner />}>
                {/* {onBackground ? <CSBlur /> : null} */}
                <RootNavigator />
        </Provider>
    );
};

export default App;
