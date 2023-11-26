import axios from 'axios';
import { BASIC_AUTH, CANAL, DEFAULT_TIMEOUT, OAUTH_BASE_PATH } from 'react-native-dotenv';
import { decrypt } from '../encryptors/AES'

const auth = await decrypt(BASIC_AUTH);

const instance = axios.create({
    baseURL: OAUTH_BASE_PATH,
    headers: {
        'Authorization': `Basic ${auth}`,
        'cache-control': 'no-cache',
        'Content-Type': 'application/json',
        'x-channel': CANAL,
    },
});

instance.defaults.timeout = Number(DEFAULT_TIMEOUT);

export default instance;
