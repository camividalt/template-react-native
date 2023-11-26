/* -------------- Libraries - React ------------- */
import React from "react";
import { Platform, StyleSheet, View } from "react-native";
/* -------------- Global Components ------------- */
import Message from "../../../components/Message";
/* ------------ Container Components ------------ */
import Greeting from "./Greeting";
/* -----------   Utilities - Global   ----------- */
import { COLORS, WHITE, GRAY } from '../../../../utilities/styles/Colors';

const Box = ({ children, screenError, screenPhone }) => {

  const heightBox = screenPhone ? 331 
                    : screenError  ? 300
                    : 410;
  const heightView = screenPhone ? 258 : screenError ? 198 : 330;
  return (
    <View style={styles.container}>
      <View style={[styles.containerBox, { height: heightBox}]}>
        <Greeting />
        <View style={[styles.body, { height: heightView }]}>
          {
            !screenError ?
            <Message
              text='Ingresa vía SMS'
              color={COLORS(GRAY[5], 1)}
              size={18}
              font='regular'
              style={styles.subtitle} />
              : null
          }
          {children}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  containerBox: {
    marginVertical: 24,
    height: 331,
  },
  body: {
    backgroundColor: COLORS(WHITE, 1),
    width: 328,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    alignItems: 'center',
    paddingTop: 16,
    shadowColor: Platform.OS === 'ios' ? '#00000029' : 'black',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  subtitle: {
    marginBottom: 8,
  },
});

export default Box;