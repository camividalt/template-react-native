/* -------------- Libraries - React ------------- */ 
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { useNavigation } from '@react-navigation/native'; 

const SplashScreenContainer = () => { 
    const navigation = useNavigation(); 

    useEffect(() => {
        SplashScreen.hide();
        navigation.replace('MainStackNavigator');
    }, []); 
};

export default SplashScreenContainer;
