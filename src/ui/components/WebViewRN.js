import React, {useState} from 'react';
import {StyleSheet, View, Text, Platform} from 'react-native';
import {WebView} from 'react-native-webview';

const WebViewRN = () => {
  return <WebView source={{uri: 'https://reactnative.dev/'}} />;
};

export default WebViewRN;
