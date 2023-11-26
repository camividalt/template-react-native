/* -------------- Libraries - React ------------- */
import React from 'react';
import { StyleSheet, View } from 'react-native';
/* -------------- Global Components ------------- */
import Message from '../../../components/Message'; 
/* -----------   Utilities - Styles   ----------- */
import { COLORS, GRAY } from '../../../../utilities/styles/Colors';

const Greeting = () => {
    return (
        <View style={styles.container}>
            <View style={styles.items}>
                <Message
                    text='¡Hola! Qué alegría verte por acá'
                    font='regular'
                    size={16}
                    color={COLORS(GRAY[6], 1)}
                    style={styles.text} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS(GRAY[1], 1),
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    items: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 18,
    },
    text: {
        paddingRight: 8
    }
});

export default Greeting;