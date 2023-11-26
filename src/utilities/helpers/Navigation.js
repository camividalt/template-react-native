/* -------------- Libraries - React ------------- */
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
/* -------------- Global Components ------------- */
// import CSReturnButton from '../../components/navigation/CSReturnButton';
// import CSHeader, { headerColor } from '../../components/navigation/CSHeader';
/* ------------------ Utilities ----------------- */

export const configureGradientHeader = ({ back, navigation, route, options } ) => {
    const navigationParamTitle = route?.params?.title;
    const title =
        navigationParamTitle !== undefined
            ? navigationParamTitle
            : options.headerTitle !== undefined
                ? options.headerTitle
                : options.title !== undefined
                    ? options.title
                    : route.name;

    // const defaultHeaderLeft = back
    //     ? <CSReturnButton
    //         onPress={() => navigation.pop()}
    //         color={options.headerColor === headerColor.WHITE
    //             ? colors.BLACK
    //             : colors.WHITE} />
    //     : undefined
    
    return (
        // <CSHeader
        //     title={title}
        //     color={options.headerColor ? options.headerColor : headerColor.GRADIENT}
        //     leftButton={options.headerLeft ? options.headerLeft() : defaultHeaderLeft}
        // />
        <View>
            <Text>X</Text>
        </View>
    );
}