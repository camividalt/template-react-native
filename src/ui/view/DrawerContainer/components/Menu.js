/* -------------- Libraries - React ------------- */
import React, { memo } from 'react';
import { View, StyleSheet, ScrollView, Text,TouchableOpacity, Image  } from 'react-native';
import { connect, useSelector } from 'react-redux';
/* -------------- Global Components ------------- */
import Message from '../../../components/Message';
/* ------------ Container Components ------------ */
import MenuHeader from './MenuHeader';
import MenuSection from './MenuSection';
/* ------------------ Utilities ----------------- */
import { COLORS, BLUE, WHITE } from '../../../../utilities/styles/Colors';
import { DRAWER_MENU_SECTIONS } from '../../../../utilities/constants';

import { logout } from '../../../../data/services/actions/action';
import { ICONS } from '../../../../utilities/Assets';
 
const Menu = (props) => { 

    return (
        <View style={styles.container}>
            <MenuHeader />
            <ScrollView>
                <View style={{marginBottom: 20}}>
                    {DRAWER_MENU_SECTIONS.map((section, index) =>
                       <MenuSection key={index} section={section} />
                    )} 
                </View>
                <View >
                    <TouchableOpacity style={styles.singoffContainer} onPress={() => props.logout()}>
                        <Image
                            source={ICONS.signOff}
                            style={styles.signOff}
                        />
                        <Message style={styles.singOffText} text={'Cerrar Sesión'} color={COLORS(WHITE, 1)} font='regular' />
                    </TouchableOpacity>
                </View> 
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: COLORS(BLUE.MOVISTAR, 1)
    },
    legalsText: {
        marginTop: 30,
        paddingHorizontal: 20,
        lineHeight: 17,
    },
    versionText: {
        paddingVertical: 20,
    },
    singoffContainer:{
        height: 28,
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    signOff: {
        width: 24,
        height: 24,
        alignSelf: 'flex-start',
        marginLeft: 22,
        marginRight: 13,
    },
    singOffText: {
        margin: 0, 
        padding: 0
    }
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(memo(Menu));
