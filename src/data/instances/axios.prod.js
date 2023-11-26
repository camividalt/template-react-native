import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://apix.movistar.cl/'
});

export default instance;