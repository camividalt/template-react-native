import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Modal } from 'react-native';
import Header from '../../../components/navigation/Header';
import ReturnButton from '../../../components/navigation/ReturnButton';
import { COLORS, WHITE, BLUE, GRAY, RED } from '../../../../utilities/styles/Colors';
 import Message from '../../../components/Message';

const ModalsContainer = () => {
    const navigation = useNavigation();
    return (
        <>
            <View>
                <Header
                    color={'BLUE'}
                    titleDirection="center"
                    titleSize={20}
                    title="Modals"
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
                </View>
            </View>
        </>
    );
};


export default ModalsContainer;