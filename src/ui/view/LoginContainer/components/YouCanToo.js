import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {COLORS, BLUE, WHITE, GRAY} from '../../../../utilities/styles/Colors';

export const TambienPuedes = () => {
  return (
    <View style={style.container}>
      <View style={style.containerPuedes}>
        <View style={style.containerPuedes2}>
          <View style={style.drawHorizontal} />

          <Text style={style.textPuedes}> También puedes</Text>

          <View style={style.drawHorizontal} />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: 25,
    backgroundColor: COLORS(GRAY[1], 1),
  },
  containerPuedes: {
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    flex: 1,
  },
  containerPuedes2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textPuedes: {
    color: COLORS(GRAY[6], 1),
    fontSize: 20,
  },
  drawHorizontal: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS(GRAY[2], 1),
  },
});
