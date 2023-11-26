import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import { COLORS, BLUE, WHITE, GRAY } from '../../../utilities/styles/Colors';
import Telefonica from '../../../utilities/styles/TelefonicaFont';


const Phone = (props) => {
   
    const {number, setNumber, errorPhone, errorPhoneInput} = props;

    const hasErrors = () => {
        return errorPhone;
    };
    

    return (
      <>
        <TextInput
          outlineColor={COLORS(GRAY[3], 1)}
          placeholderTextColor={COLORS(GRAY[3], 1)}
          activeOutlineColor={COLORS(BLUE.MOVISTAR, 1)}
          left={<TextInput.Affix text="+56 9" />}
          label="Telefono"
          mode="outlined"
          error={errorPhoneInput}
          placeholder="Ej: 81503580"
          value={number}
          maxLength={8}
          onChangeText={number => {
            const numericText = number.replace(/[^0-9]/g, '');
            setNumber(numericText);
          }}
          autoFocus={true}
        />

        <HelperText style={styles.textError} type="error" visible={hasErrors()}>
          Debes ingresar 8 caracteres
        </HelperText>
      </>
    );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS(BLUE.MOVISTAR, 1),
  },
  greeting: {
    color: COLORS(WHITE, 1),
    fontFamily: Telefonica.regular.fontFamily,
    fontSize: 16,
    marginVertical: 15,
    marginLeft: 10,
  },
  textError: {
    textAlign: 'right',
  },
});

export default Phone;