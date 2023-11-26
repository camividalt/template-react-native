import axios from 'axios';
import { BASE_PATH } from 'react-native-dotenv'

const instance = axios.create({
    baseURL: BASE_PATH
});

export default instance;