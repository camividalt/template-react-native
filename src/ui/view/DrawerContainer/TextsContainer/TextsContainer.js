import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import Header from '../../../components/navigation/Header';
import ReturnButton from '../../../components/navigation/ReturnButton';
import { COLORS, WHITE, BLUE, GRAY, RED } from '../../../../utilities/styles/Colors';
 import Message from '../../../components/Message';

const TextsContainer = () => {
    const navigation = useNavigation();
    return (
        <>
            <View>
                <Header
                    color={'BLUE'}
                    titleDirection="center"
                    titleSize={20}
                    title="Texts"
                    leftButton={
                        <ReturnButton
                            onPress={() => navigation.pop()}
                            color={COLORS(WHITE, 1)}
                            iconAndText
                        />
                    }
                    drawerIcon
                />
                <View style={{ marginTop: 30 }}>
                    <Message text="Template AppMovistar" color={COLORS(GRAY[5], 1)} />
                    <View style={{ marginVertical: 4 }} />
                    <Message text="Template AppMovistar" size={18} color={COLORS(RED, 1)} />
                    <View style={{ marginVertical: 4 }} />
                    <Message text="Template AppMovistar" size={20} color={COLORS(BLUE.MOVISTAR, 1)} />
                    <View style={{ marginVertical: 4 }} />
                    <Message text="Template AppMovistar" size={24} font='bold' />
                    <View style={{ marginVertical: 4 }} />
                    <Message text="Template AppMovistar" size={28} font='bold' color={COLORS(RED, 1)} />
                    <View style={{ marginVertical: 4 }} />
                    <Message text="Template AppMovistar" size={32} font='regular' color={COLORS(BLUE.MOVISTAR, 1)} />
                    <View style={{ marginVertical: 4 }} />
                    <Message text="Template AppMovistar" size={36} /> 
                </View>
            </View>
        </>
    );
};


export default TextsContainer;