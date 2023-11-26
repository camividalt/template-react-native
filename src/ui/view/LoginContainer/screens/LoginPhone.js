/* -------------- Libraries - React ------------- */
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
/* -------------- Global Components ------------- */
import Message from '../../../components/Message';
import Button from '../../../components/Button';
import Phone from '../../../components/inputs/Phone';
/* -----------   Utilities - Styles   ----------- */
import { COLORS, GRAY, WHITE } from '../../../../utilities/styles/Colors';
import { trackAnalytics } from '../../../../utilities/analytics/analytics';

const LoginPhone = (props) => {
  const {login, setNumberPhone, errorPhone, errorPhoneInput, loading} = props;
  const [number, setNumber] = useState('');

  useEffect(() => {
    setNumberPhone(number);
  }, [number]);

  useEffect(() => {
    trackAnalytics('ViewLoginPhone', {
      id: 100003,
      item: 'ViewLoginPhone',
      description: ['View Login Phone Number'],
    });
    console.log('Evento ViewLoginPhone Activado');
  }, []);

  const onCallToActionHandler = () => {
    login();
    trackAnalytics('ClickButtonEnviar', {
      id: 200051,
      item: 'ButtonEnviarSms',
      description: ['Click Button Enviar SMS'],
    });
  };

  return (
    <>
      <Message
        text="Ingresa tu número de teléfono y te enviaremos el PIN vía SMS."
        font="regular"
        size={14}
        color={COLORS(GRAY[4], 1)}
        style={styles.description}
      />
      <View style={styles.container}>
        <Phone
          number={number}
          setNumber={setNumber}
          errorPhone={errorPhone}
          errorPhoneInput={errorPhoneInput}
        />
        <Button
          type="blue"
          onPress={() => onCallToActionHandler()}>
          {loading ? (
            <ActivityIndicator color={COLORS(WHITE, 1)} />
          ) : (
            <Message
              text="Enviar SMS"
              font="bold"
              size={16}
              color={COLORS(WHITE, 1)}
            />
          )}
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  description: {
    paddingHorizontal: 16,
    letterSpacing: 0,
    marginBottom: 18,
  },
  container: {
    width: 300,
  },
});

export default LoginPhone; 