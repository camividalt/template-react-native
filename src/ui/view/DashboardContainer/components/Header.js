/* -------------- Libraries - React ------------- */
import React from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';
/* -------------- Global Components ------------- */
import MenuItem from '../../../components/MenuItem';
/* -----------   Utilities - Global   ----------- */
import { COLORS, BLUE } from '../../../../utilities/styles/Colors';
import { ICONS } from '../../../../utilities/Assets';
 
const Header = () => {
     return (
        <>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <View style={[styles.container]}> 
            <View style={{flex: 1}}>
                <Image
                    source={ICONS.LOGO.WHITE}
                    style={styles.logoCompany}
                    resizeMode='stretch'
                />
            </View> 
            <View style={{alignSelf: 'center'}}>
                <MenuItem isDrawer />
            </View> 
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS(BLUE.MOVISTAR, 1),
        flexDirection: 'row', 
        height: 80
    }, 
    logoCompany: { 
        marginTop: 30,
        marginLeft: 40,
        alignSelf: 'center'   
    }
});

export default Header;