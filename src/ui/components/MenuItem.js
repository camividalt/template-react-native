import React, { useCallback } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ICONS } from '../../utilities/Assets';

const MenuItem = ({ isDrawer, navigateTo }) => {
    const navigation = useNavigation();

    const handlerPress = useCallback(() => {
        if (isDrawer) { 
            navigation.openDrawer();
        } else {
            navigation.navigate(navigateTo);
        }
    }, [
        isDrawer,
        navigation,
        navigateTo,
    ]);

    return (
        <TouchableOpacity onPress={handlerPress} style={styles.btn} activeOpacity={0.7}>
            <Image source={isDrawer ? ICONS.bar : ICONS.close} style={styles.icon} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: { padding: 10 },
    icon: {
        height: 24,
        width: 24,
    },
});

export default React.memo(MenuItem);
