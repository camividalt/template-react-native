/* -------------- Libraries - React ------------- */
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
/* -------------- Global Components ------------- */
import Header from './components/Header';
import Box from './components/Box';
/* ------------   Container Screens  ------------ */
import LoginPhone from './screens/LoginPhone';
import LoginPin from './screens/LoginPin';
import Error from './screens/Error';
import WeSorry from './screens/WeSorry';
/* -----------   Utilities - Styles   ----------- */
import { COLORS, BLUE, WHITE } from '../../../utilities/styles/Colors';
/* ------------------- Stores ------------------- */
import { fetchLoginPartner, fetchLoginSMS } from '../../../data/services/actions/action';
/* -------------------- Hooks ------------------- */
import useLogin from './hooks/useLogin';

const LoginContainer = (props) => {
  const [number, setNumber] = useState('');

  const {
    loginHandler,
    loginSMSHandler,
    resendPinHandler,
    errorNumber,
    loadSendSMS,
    errorPhoneInput,
    screenPhone,
    screenError,
    screenWeAreSorry,
    loadLogin,
    reload } = useLogin({ phone: number, loginSMS: props.loginSMS, sendCode: props.sendCode, UpdateSessionData: props.UpdateSessionData, QueryCustomer: props.QueryCustomer, login: props.login });


  const setNumberPhone = (value) => {
    setNumber(value);
  };

  return (
    <>
      <SafeAreaView style={styles.SafeAreaStyle}>
        <Header screenPhone={screenPhone} reload={reload} />

        {screenWeAreSorry.status ? (
          <WeSorry reload={reload} text={screenWeAreSorry.text} />
        ) : (
          <Box screenError={screenError} screenPhone={screenPhone}>
            <View style={styles.containerBox}>
              {screenError ? (
                <Error reload={reload} />
              ) : screenPhone ? (
                <LoginPhone
                  login={loginHandler}
                  setNumberPhone={value => setNumberPhone(value)}
                  errorPhone={errorNumber}
                  errorPhoneInput={errorPhoneInput}
                  loading={loadSendSMS}
                />
              ) : (
                <LoginPin
                  number={number}
                  setNumber={setNumber}
                  setPin={value => { loginSMSHandler(value) }}
                  loading={loadLogin}
                  resendPin={() => resendPinHandler()}
                />
              )}
            </View>
          </Box>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  SafeAreaStyle: {
    backgroundColor: COLORS(BLUE.MOVISTAR, 1),
  },
  containerBox: {
    backgroundColor: COLORS(WHITE, 1),
    width: 328,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    alignItems: 'center',
    paddingBottom: 20,
  },
});

const mapStateToProps = (state) => ({
  login: state.auth,
  sendCode: state.sendCode,
  loginSMS: state.loginSMS,
  QueryCustomer: state.QueryCustomer,
  UpdateSessionData: state.UpdateSessionData
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLoginPartner: (number) => dispatch(fetchLoginPartner(number)),
    fetchLoginSMS: (code, number) => dispatch(fetchLoginSMS(code, number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);