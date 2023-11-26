/* -------------- Libraries - React ------------- */
import React, { useMemo } from 'react';
import { View, ImageBackground, StatusBar, StyleSheet } from 'react-native';
/* ------------ Global Components ------------ */
import MenuItem from '../../view/DashboardContainer/components/MenuItem';
import Message from '../Message';
/* ------------------ Utilities ----------------- */
import { COLORS, BLUE, WHITE, BLACK, GRAY } from '../../../utilities/styles/Colors';
import { getHeaderHeight, getStatusBarHeight } from '../../../utilities/helpers/Platform';
/* ------------------- Assets ------------------- */
import { gradientBanner } from '../../../utilities/Assets';

export const headerColor = {
    GRADIENT: 'GRADIENT',
    WHITE: 'WHITE',
    BLUE: 'BLUE',
};

const Header = ({
    title,
    titleDirection,
    titleSize,
    leftButton,
    rightButton,
    color,
    drawerIcon,
    modal,
}) => {
    const headerColorContainer = color === headerColor.BLUE ? COLORS(BLUE.MOVISTAR, 1) : COLORS(WHITE, 1);
    const headerType =
        (color === headerColor.WHITE || color === headerColor.BLUE) && color !== undefined
            ? 'color'
            : 'image';
    const source = headerType === 'color' ? null : gradientBanner;
    const STATUS_BAR_HEIGHT = useMemo(() => getStatusBarHeight(), []);
    const HEADER_HEIGHT = useMemo(() => getHeaderHeight(), []);
    const containerStyles = StyleSheet.flatten([
        styles.container,
        {
            height: HEADER_HEIGHT,
            paddingTop: STATUS_BAR_HEIGHT,
            backgroundColor: headerType === 'color' ? headerColorContainer : null,
        },
        color === headerColor.WHITE && !modal ? styles.borderBottom : null,
    ]);
    const headerStyles = StyleSheet.flatten([
        styles.header,
        { height: HEADER_HEIGHT - STATUS_BAR_HEIGHT },
    ]);
    return (
        <>
            <StatusBar
                barStyle={color === headerColor.WHITE ? 'dark-content' : 'light-content'}
                backgroundColor="transparent"
                translucent
            />
            <ImageBackground style={containerStyles} resizeMode="stretch" source={source}>
                <View style={headerStyles}>
                    <View style={styles.left}>
                        {leftButton}
                        {color === headerColor.BLUE && <View opacity={0.2} style={styles.pipe} />}
                    </View>
                    <View style={styles.center}>
                        <Message
                            text={`${title}`}
                            style={{
                                marginLeft: titleDirection ? 3 : 0
                            }}
                            color={color === headerColor.WHITE && color !== undefined
                                ? COLORS(BLACK, 1)
                                : COLORS(WHITE, 1)}
                            font="regular"
                            size={titleSize || 17}
                            align={titleDirection || 'center'}
                        />
                    </View>
                    <View style={styles.right}>
                        {rightButton}
                        {drawerIcon && <MenuItem isDrawer />}
                    </View>
                </View>
            </ImageBackground>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        top: 0,
    },
    left: {
        flex: 1,
        flexDirection: 'row',
    },
    center: {
        flex: 4,
    },
    right: {
        flex: 1,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        color: COLORS(WHITE, 1),
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS(GRAY[5], 1),
    },
    pipe: {
        height: 28,
        alignSelf: 'center',
        borderLeftWidth: 2,
        borderLeftColor: COLORS(WHITE, 1),
        marginLeft: 13,
    },
});
export default Header; 