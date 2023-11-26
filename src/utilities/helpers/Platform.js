import { StatusBar, Platform, Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const isIphoneX = () => {
    const dimen = Dimensions.get('window');
    return (
        Platform.OS === 'ios' &&
        ((dimen.height === 780 && dimen.width === 360) ||
            (dimen.height === 812 && dimen.width === 375) ||
            (dimen.height === 844 && dimen.width === 390) ||
            (dimen.height === 896 && dimen.width === 414) ||
            (dimen.height === 926 && dimen.width === 428))
    );
};

export const getStatusBarHeight = () => {
    if (Platform.OS === 'ios') {
        return isIphoneX() ? 44 : 20;
    }
    return DeviceInfo.hasNotch() ? StatusBar.currentHeight : StatusBar.currentHeight + 10;
};

export const getHeaderHeight = () => {
    if (Platform.OS === 'ios') {
        return getStatusBarHeight() + 44;
    }
    return getStatusBarHeight() + 56;
};
export const hasNotch = () => DeviceInfo.hasNotch();

export const getHeaderHeightWithoutStatusBar = () => {
    if (Platform.OS === 'ios') {
        return 44;
    }
    return 70;
};

export const isIosPlatform = () => Platform.OS === 'ios';

export const getModelValidWalletiOS = () => {
    try {
        const model = DeviceInfo.getModel().toLowerCase();
        return (
            (model !== 'iphone 4' ||
                model !== 'iphone 4s' ||
                model !== 'iphone 5' ||
                model !== 'iphone 5c') &&
            Platform.OS === 'ios'
        );
    } catch (e) {
        return false;
    }
};

export const isNFCSupported = async () => {
    if (!isIosPlatform()) {
        try {
            const NfcManager = require('react-native-nfc-manager');
            if (NfcManager?.default?.isSupported()) {
                const isNFC = await NfcManager.default.isSupported();
                return isNFC;
            }
            const isNFC = await NfcManager.isSupported();
            return isNFC;
        } catch (e) {
            return false;
        }
    }
};

export const isNFCEnabled = async () => {
    if (!isIosPlatform()) {
        try {
            const NfcManager = require('react-native-nfc-manager');
            if (NfcManager?.default?.isEnabled()) {
                return await NfcManager.default.isEnabled();
            }
            return await NfcManager.isEnabled();
        } catch (e) {
            return false;
        }
    }
};
