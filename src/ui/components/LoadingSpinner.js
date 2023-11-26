/* -------------- Libraries - React ------------- */
import React from 'react';
import { StyleSheet, View, Animated, Dimensions } from 'react-native';
/* -----------   Utilities - Global   ----------- */
import { ICONS } from '../../utilities/Assets';
/* -----------   Utilities - Styles   ----------- */
import { COLORS, BLUE } from '../../utilities/styles/Colors';

const LoadingSpinner = () => {
    return (
        <View style={styles.view}>
            <View style={styles.container}>
                <Animated.Image style={styles.logo} source={ICONS.LOGO.WHITE} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        zIndex: 99,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: COLORS(BLUE.MOVISTAR, 1),
        justifyContent: 'center',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    logo: {
        zIndex: -1,
        position: 'absolute',
        width: Dimensions.get('window').width * 0.3,
        resizeMode: 'contain',
    }, 
});

export default LoadingSpinner;
