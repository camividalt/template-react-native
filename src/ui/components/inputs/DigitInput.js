import React, { useState, useMemo, useEffect, createRef, forwardRef, useImperativeHandle } from 'react';
import { View, TextInput, StyleSheet, Keyboard, Dimensions, Platform, } from 'react-native';
import { COLORS, GRAY, BLUE, WHITE, RED } from '../../../utilities/styles/Colors';
import Telefonica from '../../../utilities/styles/TelefonicaFont';
import { isEmptyString } from '../../../utilities/stringUtils';
import { isIosPlatform } from '../../../utilities/helpers/Platform';

const DigitInput = forwardRef((props, ref) => {

    const { error, otpChallenge, numbersInput, setAutoCompleteIos } = props;
    const [digits, setDigits] = useState([]);
    const [secureText, setSecureText] = useState(props.secureTextEntry);
    const [borderColor, setBorderColor] = useState(COLORS(GRAY[3], 1));
    const WIDTH_DEVICE = useMemo(() => Dimensions.get('window').width <= 375, []);
    const [autoSelect, setAutoSelect] = useState("");
    const [canDelete, setCanDelete] = useState(false);

    useEffect(() => {
        addDigitsCreateRef();
    }, []);


    useEffect(() => {
        if (otpChallenge && autoSelect && autoSelect !== '') {
            if (autoSelect.length === numbersInput) {
                const newDigits = [...digits];
                for (let i = 0; i < numbersInput; i++) {
                    newDigits[i] = autoSelect[i];
                }
                setDigits(newDigits);
                Keyboard.dismiss();
                setAutoCompleteIos && setAutoCompleteIos(autoSelect);
                setTimeout(() => setCanDelete(true), 200);
            }
        }
    }, [autoSelect, otpChallenge])


    useEffect(() => {
        if (inputs[0] && !error && otpChallenge && isIosPlatform()) {
            inputs[0].current.focus();
        }
    }, [inputs, error, otpChallenge]);

    useEffect(() => {
        (props.values && props.values === props.numbersInput) && addDigitsCreateRef();
    }, [props.newNumber]);

    useEffect(() => {
        props.onChange && props.onChange(digits.join(''));
    }, [digits]);

    useImperativeHandle(ref, () => ({
        clear() {
            addDigitsCreateRef();
        },
        focus() {
            inputs[0].current.focus();
        }
    }));

    const addDigitsCreateRef = () => {
        let newDigits = new Array();
        if (props.values && props.values.length !== undefined) {
            for (var x = 1; x <= props.values.length; x++) {
                newDigits.push(props.values[x - 1]);
            }
        } else {
            for (var i = 1; i <= props.numbersInput; i++) {
                newDigits.push('');
            }
        }
        setDigits(newDigits);
        return newDigits.map(() => createRef());
    }

    const onChangeHandler = (value, index) => {
        value = value.replace(/[^0-9]/g, '');

        if (value.length === numbersInput) {
            setAutoSelect(value);
        }


        setDigits(oldDigits => {
            const newDigits = [...oldDigits];
            newDigits[index] = value;
            return newDigits;
        });

        if (isEmptyString(value)) { return }

        if (index < digits.length - 1) {
            inputs[index + 1].current.focus();
        } else {
            Keyboard.dismiss();
            setBorderColor(COLORS(GRAY[3], 1));
        }

    };

    const inputs = useMemo(() => addDigitsCreateRef(), []);

    const inputStyle = StyleSheet.flatten([
        styles.input,
        Telefonica.regular,
        props.error ? styles.inputError : { borderColor: borderColor },
        {
            height: digits.length > 4 ? 43 : WIDTH_DEVICE ? Platform.OS === 'android' ? 43 : 48 : 53,
            width: digits.length > 4 ? 43 : WIDTH_DEVICE ? Platform.OS === 'android' ? 43 : 48 : 53,
            marginHorizontal: digits.length >= 6 ? 4.5 : 8,
            borderRadius: digits.length > 4 ? 4 : 8,
        }
    ]);

    const canDeleteAutoComplete = (index) => {
        if (index === 0) {
            setDigits(oldDigits => {
                const newDigits = [...oldDigits];
                newDigits[index] = "";
                return newDigits;
            });
        }
        if (canDelete) {
            setAutoCompleteIos && setAutoCompleteIos("");
            setAutoSelect("")
        }
    }

    const setAutoSelecIOS = (e) => {
        if (e.nativeEvent.key.length === numbersInput) {
            const value = e.nativeEvent.key.replace(/[^0-9]/g, '');
            if (value !== '') {
                setAutoSelect(autoSelect + value)
            }
        }

    }
    return (
        <View style={styles.container}>
            {digits.map((digit, index) => (
                <TextInput
                    textContentType={otpChallenge ? "oneTimeCode" : "none"}
                    editable={props.editable ? props.editable : true}
                    key={index}
                    style={inputStyle}
                    maxLength={otpChallenge && index === 0 ? numbersInput : 1}
                    value={digit}
                    ref={inputs[index]}
                    keyboardType="number-pad"
                    secureTextEntry={secureText}
                    onChangeText={value => {
                        value.replace(/[^0-9]/g, '');
                        if ((value.length === 1 || value.length === numbersInput || value === '') && !value.match(/[a-z]/i)) {
                            onChangeHandler(value, index)
                        }
                    }}
                    onKeyPress={e => {
                        (e.nativeEvent.key === 'Backspace' && index !== 0) && inputs[index - 1].current.focus();
                        isIosPlatform() && otpChallenge && e.nativeEvent.key !== 'Backspace' && setAutoSelecIOS(e)
                    }}
                    onFocus={(e) => { setBorderColor(COLORS(BLUE.MOVISTAR, 1)); props.onFocus && props.onFocus(); otpChallenge && canDeleteAutoComplete(index); }}
                />
            ))}
            {props.showHideIcon && (
                <Icon
                    name={secureText ? "eye" : "eye-off"}
                    size={25}
                    style={styles.eye}
                    color={props.disableEye ? COLORS(GRAY[3], 1) : COLORS(GRAY[3], 1)}
                    onPress={() => !props.disableEye && setSecureText(!secureText)}
                />)}
        </View>
    );

});


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginLeft: 0,
    },
    input: {
        backgroundColor: COLORS(WHITE, 1),
        borderWidth: 1,
        textAlign: 'center',
        fontSize: 16,
    },
    inputError: {
        borderColor: COLORS(RED, 1)
    },
    eye: {
        alignSelf: 'center',
        marginLeft: 5
    }
});


export default DigitInput;