import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import Header from '../../../components/navigation/Header';
import ReturnButton from '../../../components/navigation/ReturnButton';
import { COLORS, WHITE, BLUE } from '../../../../utilities/styles/Colors';
import Button from '../../../components/Button';
import Message from '../../../components/Message';

const ButtonsContainer = () => {
    const navigation = useNavigation();
    return (
        <>
            <View>
                <Header
                    color={'BLUE'}
                    titleDirection="center"
                    titleSize={20}
                    title="Buttons"
                    leftButton={
                        <ReturnButton
                            onPress={() => navigation.pop()}
                            color={COLORS(WHITE, 1)}
                            iconAndText
                        />
                    }
                    drawerIcon
                />
                <View style={{ marginVertical: 20 }} />
                <View style={{ alignItems: 'center' }}>
                    <Button type="blue">
                        <Message
                            text="Button Blue"
                            font="bold"
                            size={16}
                            color={COLORS(WHITE, 1)}
                        />
                    </Button>
                </View>
                <View style={{ marginVertical: 20 }} />
                <View style={{ alignItems: 'center' }}>
                    <Button type="white">
                        <Message
                            text="Button White"
                            font="bold"
                            size={16}
                            color={COLORS(BLUE.MOVISTAR, 1)}
                        />
                    </Button>
                </View>
                <View style={{ marginVertical: 20 }} />
                <View style={{ alignItems: 'center' }}>
                    <Button type="blue" >
                        <ActivityIndicator color={COLORS(WHITE, 1)} />
                    </Button>
                </View>
                <View style={{ marginVertical: 20 }} />
                <View style={{ alignItems: 'center' }}>
                    <Button type="white" >
                        <ActivityIndicator color={COLORS(BLUE.MOVISTAR, 1)} />
                    </Button>
                </View>
            </View>
        </>
    );
};


export default ButtonsContainer;