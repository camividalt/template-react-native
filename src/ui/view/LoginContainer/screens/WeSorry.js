/* -------------- Libraries - React ------------- */
import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
/* -------------- Global Components ------------- */
import Message from '../../../components/Message';
import Button from '../../../components/Button';
/* -----------   Utilities - Global   ----------- */
import { ICONS } from '../../../../utilities/Assets';
/* -----------   Utilities - Styles   ----------- */
import { COLORS, GRAY } from '../../../../utilities/styles/Colors';
import { trackAnalytics } from '../../../../utilities/analytics/analytics';

const WeSorry = ({reload, text}) => {
  
  useEffect(() => {
    trackAnalytics('ViewWeSorry', {
      id: 100005,
      item: 'ViewWeSorry',
      description: ['View WeSorry Error PIN'],
    });
    console.log('Evento ViewWeSorry Activado');
  }, []);

  const onCallToActionHandler = () => {
    reload();
    trackAnalytics('ClickButtonReintentar', {
      id: 200055,
      item: 'ButtonReintentar',
      description: ['Click Button Reintentar'],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.items}>
        <Image source={ICONS.weAreSorry} />
        <Message
          text='Lo sentimos'
          font='light'
          size={22}
          color={COLORS(GRAY[5], 1)}
          style={styles.title} />
         <Message
          text={text}
          font='regular'
          color={COLORS(GRAY[5], 1)}
          style={styles.description} />
        <Button text="Reintentar" type='blue' onPress={() => onCallToActionHandler()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS(GRAY[1], 1),
    height: "110%"
  },
  items: {
    height: 333,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 32,
    paddingBottom: 24,
  },
  title: {
    paddingTop: 24,
    paddingBottom: 16,
  },
  description: {
    paddingBottom: 24,
  },
});

export default WeSorry; 