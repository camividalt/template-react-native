import * as React from 'react';
import { CommonActions } from '@react-navigation/native';

const navigationRef = React.createRef();

const navigate = (name, params = {}) => {
    navigationRef.current &&
        navigationRef.current.navigate &&
        navigationRef.current.navigate(name, params);
};

const navigateAndReset = (routeName, params) =>
    navigationRef.current?.dispatch(
        CommonActions.reset({
            index: 0,
            routes: [{ name: routeName, params }],
        })
    );

export default {
    navigate,
    navigateAndReset,
    navigationRef,
};
