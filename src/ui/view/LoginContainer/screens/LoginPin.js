/* -------------- Libraries - React ------------- */
import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
/* -------------- Global Components ------------- */
import Message from '../../../components/Message';
import Button from '../../../components/Button';
import DigitInput from '../../../components/inputs/DigitInput';
/* -----------   Utilities - Global   ----------- */
import { isEmptyString } from '../../../../utilities/stringUtils';
import { time } from '../../../../utilities/Formats';
/* -----------   Utilities - Styles   ----------- */
import { COLORS, GRAY, WHITE, BLUE } from '../../../../utilities/styles/Colors';
import { trackAnalytics } from '../../../../utilities/analytics/analytics';

const LoginPhone = props => {
  const { number, setPin, loading, resendPin } = props;
  const digitInputRef = useRef(null);
  const [key, setKey] = useState('');
  const [isValidKey, setIsValidKey] = useState(false);
  const [error, setError] = useState(false);
  const segundos = 90;
  const [seconds, setSeconds] = useState(segundos);
  const [timerActive, setTimerActive] = useState(false);
  const [resend, setResend] = useState(false);

  const onFocusHandler = () => {
    error && digitInputRef.current.clear();
    setError(false);
  };

  useEffect(() => {
    setIsValidKey(false);
  }, []);

  const onChangeHandler = value => {
    if (value.length === 0 || value.length < 6) {
      setIsValidKey(false);
    } else if (!isEmptyString(value[0])) {
      setIsValidKey(true);
    } else {
      setIsValidKey(false);
    }
    setKey(value);
  };

  useEffect(() => {
    setIsValidKey(props.isValidKey);
  }, [props.isValidKey]);

  const onButtonPress = () => {
    setTimerActive(true);
    setResend(false);
    setSeconds(segundos);
    resendPin();
    trackAnalytics('ClickButtonReenviarPin', {
      id: 200054,
      item: 'ButtonReenviarPin',
      description: ['Click Button Reenviar Pin'],
    });
  };

  // useEffect(() => {
  //     setKey(key);
  //   }, [key]);

  useEffect(() => {
    let interval = null;

    if (timerActive) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
    }

    if (seconds === 0) {
      clearInterval(interval);
      setTimerActive(false);
      setResend(true);
    }

    return () => clearInterval(interval);
  }, [timerActive, seconds]);

  useEffect(() => {
    setSeconds(segundos);
    setTimerActive(true);
  }, []);

  const onCallToActionHandler = () => {
    setPin(key);
    console.log('key', key);
    trackAnalytics('ClickButtonIniciar', {
      id: 200053,
      item: 'ButtonIniciarSesion',
      description: ['Click Button Iniciar Session'],
    });

  };

  useEffect(() => {
    trackAnalytics('ViewLoginPin', {
      id: 100004,
      item: 'ViewLoginPin',
      description: ['View Login Pin'],
    });
    console.log('Evento ViewLoginPin Activado');
  }, []);


  return (
    <>
      <Message
        text={`Ingresa el Pin que enviamos vía SMS al \n número `}
        font="regular"
        style={styles.description}>
        <Message
          text={`+569${number}`}
          font="bold"
          color={COLORS(GRAY[4], 1)}
        />
      </Message>
      <View style={styles.pin}>
        <DigitInput
          editable={true}
          onFocus={onFocusHandler}
          ref={digitInputRef}
          secureTextEntry={false}
          onChange={onChangeHandler}
          error={error}
          numbersInput={6}
        />
      </View>
      <View style={styles.ButtonLogin}>
        <Button type="blue" onPress={() => onCallToActionHandler()} disabled={!isValidKey}>
          {loading ? (
            <ActivityIndicator color={COLORS(WHITE, 1)} />
          ) : (
            <Message
              text="Iniciar sesión"
              font="bold"
              size={16}
              color={COLORS(WHITE, 1)}
            />
          )}
        </Button>
      </View>
      <View style={styles.ButtonReSendPin}>
        {resend ? (
          <Button type="white" text="Reenviar Pin" onPress={() => onButtonPress()} />
        ) : (
          <Button type="white-disabled">
            <Message
              text={`Pide el reenvío de tu Pin en ${time(seconds)}`}
              size={16}
              font="regular"
              color={COLORS(BLUE.DISABLED, 1)}
            />
          </Button>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  description: {
    paddingHorizontal: 16,
    letterSpacing: 0,
    marginBottom: 18,
  },
  container: {
    width: 300,
  },
  pin: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
    color: COLORS(GRAY[3], 1),
  },
  ButtonLogin: {
    alignItems: 'center',
    marginVertical: 24,
  },
  ButtonReSendPin: {
    alignItems: 'center',
  },
});

export default LoginPhone;
