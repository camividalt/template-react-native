/* -------------- Libraries - React ------------- */
import JailMonkey from 'jail-monkey';
import {JLS} from 'react-native-dotenv';
import { isIosPlatform } from './helpers/Platform';

export const jailBreakDetector = () => {
    if (JLS === 'true') {
        return false; 
    } 
    
    // ¿Este dispositivo tiene JailBreak?
    const isJailBroken = JailMonkey.isJailBroken();
    // (SOLO ANDROID) Comprueba si la aplicación se está ejecutando en un almacenamiento externo
    const isOnExternalStorage = !isIosPlatform() ? JailMonkey.isOnExternalStorage().toString() : null;
    // (SOLO ANDROID) Comprueba si el teléfono tiene algunas aplicaciones maliciosas instaladas
    const hookDetected = !isIosPlatform() ? JailMonkey.hookDetected().toString() : null;

    return (isJailBroken || isOnExternalStorage || hookDetected);
};
