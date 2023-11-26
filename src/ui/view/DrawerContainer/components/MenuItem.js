/* -------------- Libraries - React ------------- */
import React, { memo } from 'react';
import { Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Message from '../../../components/Message';
import { COLORS, WHITE } from '../../../../utilities/styles/Colors';

const MenuItem = (props) => {   
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate(props.item.route)} style={styles.container}>
            <Image source={props.item.icon} style={styles.icon} resizeMode="contain" /> 
            <Message text={props.item.description} color={COLORS(WHITE, 1)} font='regular' />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 15,
    },
});

export default memo(MenuItem);
