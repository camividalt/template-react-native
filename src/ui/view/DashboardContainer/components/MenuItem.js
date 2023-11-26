/* -------------- Libraries - React ------------- */
import React, { useCallback } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
/* ------------------ Utilities ----------------- */
import { iconBars } from '../../../../utilities/Assets';

const MenuItem = ({ icon, isDrawer, navigateTo }) => {
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
            <Image source={isDrawer ? iconBars : icon} style={styles.icon} />
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
