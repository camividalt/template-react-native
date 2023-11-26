import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Telefonica from '../../utilities/styles/TelefonicaFont';
import {COLORS, BLUE, WHITE} from '../../utilities/styles/Colors';

const Button = ({text, onPress, disabled, type, children}) => {
  let backgroundColorStyle;
  let textColorStyle;
  let borderStyle;

  switch (type) {
    case 'blue':
      backgroundColorStyle = {backgroundColor: COLORS(BLUE.MOVISTAR, 1)};
      textColorStyle = {color: COLORS(WHITE, 1)};
      break;
    case 'white':
      backgroundColorStyle = {color: COLORS(WHITE, 1)};
      textColorStyle = {color: COLORS(BLUE.MOVISTAR, 1)};
      borderStyle = {borderColor: COLORS(BLUE.MOVISTAR, 1), borderWidth: 1};
      break;
    case 'white-disabled':
      backgroundColorStyle = {color: COLORS(WHITE, 1)};
      textColorStyle = {color: COLORS(BLUE.DISABLED, 1)};
      borderStyle = {borderColor: COLORS(BLUE.DISABLED, 1), borderWidth: 1};
      break;
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, disabled ? styles.disabledStyle : backgroundColorStyle, borderStyle]}
      onPress={onPress}
      disabled={disabled}>
      {!children ? (
        <Text style={[styles.text, textColorStyle]}>{text}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 40,
    height: 48,
    width: 296,
    opacity: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    letterSpacing: 0,
    opacity: 1,
    fontSize: 16,
    fontFamily: Telefonica.bold.fontFamily,
  },
  disabledStyle: {
    backgroundColor: COLORS(BLUE.DISABLED, 1),
    borderColor: COLORS(BLUE.DISABLED, 1),
},
});

export default Button;
