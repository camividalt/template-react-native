import * as actionTypes from '../../../data/services/actions/types';
import { updateObject } from '../../../utilities/ObjectTools';
import axios from "../../instances/axios.prod";
import { aesEncrypt } from '../../../utilities/encryptors/AES';
import { CRYPTO_KEYS } from '../../../utilities/constants';
import { SERVER_ERROR } from '../../network/status.codes';

// Initial State
const initialState = {
    statusCode: null
};

// Action Creators  
export const fetchSendCode = (access_token, epoch, msisdn) => async (dispatch) => {
    const encrypted = aesEncrypt(`569${msisdn}`, "E", `${CRYPTO_KEYS.SMS.key}:${epoch}`, CRYPTO_KEYS.SMS.iv);

    try {
        const { data } = await axios('events/V1/sendCode', {
            method: 'POST', 
            headers: {
                Authorization: `Bearer ${access_token}`,
                'Content-Type': 'application/json'
            },
            data: {
                msisdn: encrypted
            }
        });

        console.log('[fetchSendCode] Response OK >>>>>>', data?.estado?.codigoEstado); 
        dispatch(setStatusCode(data?.estado?.codigoEstado));
    } catch (error) {
        console.log('[fetchSendCode] Response Error >>>>>>', error);
        dispatch(setStatusCode(SERVER_ERROR));
    }
};

export const setStatusCode = (status) => ({
    type: actionTypes.SET_SEND_CODE,
    statusCode: status,
});

// Reducer Functions
const setStatusCodeReducer = (state, action) =>
    updateObject(state, { statusCode: action.statusCode });

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SEND_CODE:
            return setStatusCodeReducer(state, action);
        default:
            return state;
    }
};

export default reducer;


// import CryptoJS from "react-native-crypto-js";
// const dato = "56989662442";
// const key = "4pp12m0v1st4rCHILE:" + epoch;
// const iv = "45m8v1st4r4ppSVR";
// const encrypted = CryptoJS.AES.encrypt(dato, key, { iv }).toString();
// console.log("encrypted in SendCode: " + encrypted);