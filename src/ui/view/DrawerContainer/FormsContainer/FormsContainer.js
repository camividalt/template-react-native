import React, { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import Header from '../../../components/navigation/Header';
import ReturnButton from '../../../components/navigation/ReturnButton';
import { COLORS, WHITE, BLUE, GRAY, RED } from '../../../../utilities/styles/Colors';
import Message from '../../../components/Message';
import Phone from '../../../components/inputs/Phone';
import DigitInput from '../../../components/inputs/DigitInput';


const FormsContainer = () => {
    const navigation = useNavigation();
    const [number, setNumber] = useState('');
    const digitInputRef = useRef(null);

    return (
        <>
            <View>
                <Header
                    color={'BLUE'}
                    titleDirection="center"
                    titleSize={20}
                    title="Forms"
                    leftButton={
                        <ReturnButton
                            onPress={() => navigation.pop()}
                            color={COLORS(WHITE, 1)}
                            iconAndText
                        />
                    }
                    drawerIcon
                />
                <View style={{ marginTop: 30, marginHorizontal: 30 }}>
                    <Message text="Example Input Phone" color={COLORS(BLUE.MOVISTAR, 1)} font='regular' size={20} />
                    <View style={{ marginVertical: 4 }} />
                    <Phone
                        number={number}
                        setNumber={setNumber}
                        errorPhone={false}
                    />
                    <Phone
                        number={number}
                        setNumber={setNumber}
                        errorPhone
                        errorPhoneInput
                    />
                    <View style={{ marginVertical: 20 }} />
                    <Message text="Example Input Digits" color={COLORS(BLUE.MOVISTAR, 1)} font='regular' size={20} />
                    <View style={{ marginVertical: 4 }} />
                    <View style={{ marginVertical: 4, alignItems: 'center' }}>
                        <DigitInput
                            editable={true}
                            ref={digitInputRef}
                            secureTextEntry={false}
                            error={false}
                            numbersInput={4}
                        />
                    </View>
                    <View style={{ marginVertical: 4 }} />
                    <DigitInput
                        editable={true}
                        ref={digitInputRef}
                        secureTextEntry={false}
                        error={false}
                        numbersInput={6}
                    />
                </View>
            </View>
        </>
    );
};


export default FormsContainer;