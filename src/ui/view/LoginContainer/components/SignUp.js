import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import {COLORS, BLUE, WHITE, GRAY} from '../../../../utilities/styles/Colors';
/* -----------   Utilities - Global   ----------- */
import { ICONS } from '../../../../utilities/Assets';

export const Registrate = () => {
  return (
    <View style={style.containerRegistrate}>
      <View style={style.registrate}>
        <Image
          source={ICONS.password}
          style={style.IconoContrasena}></Image>
        <View>
          <Text style={style.textRegistarte}>Registrarte</Text>
          <Text style={style.textAdministra}>
            Administra todos tus servicios
          </Text>
        </View>

        <Image
          source={ICONS.ARROW.rightBlue}
          style={style.trazado}></Image>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  containerRegistrate: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    paddingBottom: 296,
    paddingTop: 16,
    backgroundColor: COLORS(GRAY[1], 1),
    flex: 1,
  },
  registrate: {
    flexDirection: 'row',
    backgroundColor: COLORS(WHITE, 1),
    height: 64,
    width: 328,
    alignItems: 'center',

    borderRadius: 8,
    borderColor: '#00000029',
    borderWidth: 1,
    marginHorizontal: 16,
  },

  IconoContrasena: {
    marginHorizontal: 16,
  },
  trazado: {
    paddingRight: 16,
    marginRight: 16,
  },
  textRegistarte: {
    color: COLORS(BLUE.MOVISTAR, 1),
    fontSize: 14,
    width: 244,
  },
  textAdministra: {
    color: COLORS(GRAY[4], 1),
    fontSize: 14,
    width: 244,
  },
});


