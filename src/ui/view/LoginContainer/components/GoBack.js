/* -------------- Libraries - React ------------- */
import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
/* -------------- Global Components ------------- */
import Message from '../../../components/Message';
/* -----------   Utilities - Global   ----------- */
import { ICONS } from '../../../../utilities/Assets';
/* -----------   Utilities - Styles   ----------- */
import { COLORS, WHITE } from '../../../../utilities/styles/Colors';

const GoBack = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={() => onPress()}>
            <View style={styles.container}>
                <Image source={ICONS.ARROW.goBack} />
                <Message text='Volver' font='regular' color={COLORS(WHITE, 1)} style={styles.back} />
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft: 16,
        alignItems: 'center',
        marginTop: 20,
    },
    back: {
        paddingLeft: 8
    }
});

export default GoBack;