import React, {useState} from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text, 
  Platform,
} from 'react-native';
import Home from './src/home';
import WebViewRN from './src/ui/components/WebViewRN';

function App(): JSX.Element { 

  const [shouldOpenWebview, setShouldOpenWebview] = useState(false);

  if (shouldOpenWebview) 
    return <WebViewRN />

  return ( 
    <>
      <Home /> 
      <View style={styles.containerSection}>
          <Text style={styles.sectionTitle} onPress={() => setShouldOpenWebview(true)}>
            Now, let's test the WebViews -> Go! 
          </Text>
      </View>
    </>
  );
} 

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 20, 
  }, 
  containerSection: {
    borderColor: 'red', 
    borderWidth: 1,
    marginVertical: 20,
    marginTop: 100,
    marginHorizontal: 10
  },
});

export default App;