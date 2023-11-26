/* -------------- Libraries - React ------------- */

import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
 /* -------------- Global Components ------------- */
import Message from '../Message';
/* ------------------ Utilities ----------------- */
import { COLORS, WHITE, BLUE, BLACK } from '../../../utilities/styles/Colors';
 
const ReturnButton = (props) => {
    const { iconAndText } = props;

    return (
        <TouchableOpacity onPress={props.onPress} style={iconAndText && styles.iconAndText}>
            {iconAndText && <Message style={styles.textIconAndText} text="  <" size={26} color={COLORS(WHITE, 1)} font='bold' />}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    iconAndText: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textIconAndText: {
        paddingLeft: '2%',
        color: COLORS(WHITE, 1),
    },
});

export default ReturnButton;
