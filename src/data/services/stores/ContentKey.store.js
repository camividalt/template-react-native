import * as actionTypes from '../../../data/services/actions/types';
import {updateObject} from '../../../utilities/ObjectTools';
import axios from "../../instances/axios.prod";
import { fetchSendCode } from './SendCode.store';
import { SUCCESS, SERVER_ERROR, LOADING } from '../../network/status.codes';

// Initial State
const initialState = {
    statusCode: LOADING
};

// Action Creators 
export const fetchContentKey = (access_token, msisdn) => async (dispatch) => {
    try {
        const { data } = await axios('events/V1/contentKey', {
            method: 'GET', 
            headers: {
                Authorization: `Bearer ${access_token}`
            },
        });

        console.log('[fetchContentKey] Response OK >>>>>>', data);
        console.log('[fetchContentKey] Response OK >>>>>>', data?.datos.code);
        console.log('[fetchContentKey] Response OK >>>>>>', data?.estado.codigoEstado);

        if (data?.estado?.codigoEstado === SUCCESS) {
            dispatch(fetchSendCode(access_token, data?.datos.code, msisdn)); 
            dispatch(setContentKey(data));
        } else {
            dispatch(setContentKey(data));
        };
    } catch (error) {
        console.log('[fetchContentKey] Response Error >>>>>>', error);
        dispatch(setContentKey(SERVER_ERROR));
    }
};


// export const fetchContentKey = (access_token, msisdn) => {
//     return async (dispatch) => {

//         const PATH = 'events/V1/contentKey';
//         await axios({
//             method: 'GET',
//             url: PATH, 
//             headers: {
//                 Authorization: `Bearer ${access_token}`
//             }
//         }).then(function (response) {
//             const {data: {datos, estado}} = response;
//             console.log('[fetchContentKey] Response OK >>>>>>', datos.code);
//             console.log('[fetchContentKey] Response OK >>>>>>', estado.codigoEstado);
//             if (estado.codigoEstado === SUCCESS){
//                 dispatch(fetchSendCode(access_token, datos.code, msisdn)); 
//             } else {
//                 dispatch(setContentKey(SERVER_ERROR));
//             } 
//         })
//         .catch(function (error) {
//             console.log('[fetchContentKey] Response Error  >>>>>>', error);
//             dispatch(setContentKey(SERVER_ERROR));
//         });
//     }
// };     

export const setContentKey = (status) => {
    return {
        type: actionTypes.SET_CONTENT_KEY,
        statusCode: status,
    };
}; 

// Reducer Functions 
const setContentKeyReducer = (state, action) =>
    updateObject(state, { statusCode: action.statusCode });

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CONTENT_KEY:
            return setContentKeyReducer(state, action);  
        default:
            return state;
    }
};

export default reducer; 