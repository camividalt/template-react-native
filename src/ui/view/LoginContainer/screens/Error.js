/* -------------- Libraries - React ------------- */
import React, { useEffect } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Button } from 'react-native';
/* -------------- Global Components ------------- */
import Message from '../../../components/Message';
/* -----------   Utilities - Styles   ----------- */
import { COLORS, BLUE, WHITE, GRAY } from '../../../../utilities/styles/Colors';
/* -----------   Utilities - Global   ----------- */
import { ICONS } from '../../../../utilities/Assets';
import { trackAnalytics } from '../../../../utilities/analytics/analytics';

const Error = ({ reload }) => {

  useEffect(() => {
    trackAnalytics('ViewError', {
      id: 100001,
      item: 'ViewError',
      description: ['View Error Phone'],
    });

    console.log('La vista ViewError ha sido activada');
  }, []);

  const onCallToActionHandler = () => {
    reload();
    trackAnalytics('ClickButtonVolverCargar', {
      id: 200052,
      item: 'ButtonVolverCargar',
      description: ['Click Button Volver a Cargar'],
    });
  };


  return (
    <View style={styles.container}>
      <View style={styles.items}>
        <View style={styles.image}>
          <Image source={ICONS.alert} style={{ height: 24, width: 27 }} />
        </View>
        <View style={styles.title}>
          <Message
            text="Ocurrió un error"
            font="regular"
            color={COLORS(GRAY[6], 1)}
          />
        </View>
        <View style={styles.description}>
          <Message
            text="Por favor, vuelve a cargar la información o reintenta más tarde"
            font="regular"
            size={14}
            color={COLORS(GRAY[4], 1)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => onCallToActionHandler()}>
          <Message
            text="Volver a cargar"
            font="regular"
            size={14}
            color={COLORS(BLUE.MOVISTAR, 1)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  items: {
    marginVertical: 24,
    alignItems: 'center',
    flexDirection: 'column',
  },
  image: {
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  description: {
    backgroundColor: COLORS(WHITE, 1),
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  button: {
    justifyContent: 'center',
    paddingTop: 4,
  },
});

export default Error; 