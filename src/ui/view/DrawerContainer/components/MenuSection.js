/* -------------- Libraries - React ------------- */
import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
/* ------------ Container Components ------------ */
import MenuItem from './MenuItem';
/* ------------------ Utilities ----------------- */
import { COLORS, GRAY } from '../../../../utilities/styles/Colors';

const MenuSection = ({ section }) => {
    return (
        <View style={styles.section}>
            {section.items.map((item, index) =>
                <MenuItem key={index} item={item} />
            )}
        </View>
    )
};
const styles = StyleSheet.create({
    title: {
        marginVertical: 8,
    },
    section: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderBottomColor: COLORS(GRAY[5], 1),
        borderBottomWidth: 1,
    },
});

export default (memo(MenuSection));
