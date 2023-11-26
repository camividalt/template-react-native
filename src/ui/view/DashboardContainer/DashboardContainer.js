/* -------------- Libraries - React ------------- */
import React, { useState } from 'react';
import { StyleSheet, View, Platform, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DeviceInfo from 'react-native-device-info';
/* -------------- Global Components ------------- */
import Message from '../../components/Message';
import Button from '../../components/Button';
/* ------------ Container Components ------------ */
import Header from './components/Header';
/* -----------   Utilities - Styles   ----------- */
import { COLORS, BLUE, WHITE } from '../../../utilities/styles/Colors';
import { isIosPlatform } from '../../../utilities/helpers/Platform';
import { IMAGES } from '../../../utilities/Assets';


console.log('isIosPlatform()', isIosPlatform());
const DashboardContainer = () => {

  const [loading, setLoading] = useState(false);

  return (
    <>
      <SafeAreaView style={styles.SafeAreaStyle}>
        <Header />
      </SafeAreaView>
      <View style={{ marginTop: 30 }}>
        <View style={{ marginVertical: 4 }} />
        <Message text="Template Movistar" size={32} font='regular' />
        <View style={{ marginVertical: 4 }} />
        <Message text={`React Native \n React Native Web`} size={20} font='bold' />
        <View style={{ marginVertical: 20 }} />
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Image
            source={IMAGES.reactNative}
            style={styles.logoReactNative}
            resizeMode='stretch'
          />
        </View>
        <View style={{ marginVertical: 20 }} />
        {
          isIosPlatform() ? (
            <Image
              source={IMAGES.iosBlack}
              style={styles.logoApple}
              resizeMode='stretch'
            />
          ) : (
            <Image
              source={IMAGES.androidBlack}
              style={styles.logoReactNative}
              resizeMode='stretch'
            />
          )
        }
        <View style={{ marginVertical: 20 }} />
        <Message
          text={`App Versión ${DeviceInfo.getVersion()}`}
          size={14}
          color={COLORS(BLUE.MOVISTAR, 1)}
        />


        {/* <View style={{ alignItems: 'center' }}>
          <Button type="blue" onPress={() => setLoading(true)}>
            <Message
              text="Loading..."
              font="bold"
              size={16}
              color={COLORS(WHITE, 1)}
            />
          </Button>
        </View> */}
      </View>
      {/* {<LoadingSpinner />} */}
    </>
  );
};

const styles = StyleSheet.create({
  SafeAreaStyle: {
    backgroundColor: COLORS(BLUE.MOVISTAR, 1),
  },
  logoReactNative: {
    width: 110,
    height: 100,
    alignSelf: 'center'
  },
  logoApple: {
    width: 100,
    height: 100,
    alignSelf: 'center'
  }
});

export default DashboardContainer;