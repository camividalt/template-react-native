import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://apix-dev.movistar.cl/'
});

export default instance;