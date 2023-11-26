import * as actionTypes from '../actions/types';
import { updateObject } from '../../../utilities/ObjectTools';
import axios from '../../instances/axios.prod';
import { SERVER_ERROR } from '../../network/status.codes';
import { fetchUpdateSessionData } from './UpdateSessionData.store';
import { aesEncrypt } from '../../../utilities/encryptors/AES';
import { CRYPTO_KEYS } from '../../../utilities/constants';
// Initial State
const initialState = {
    estado: null,
    segment: null,
};

// Action Creators
export const fetchCustomers = (rut) => async (dispatch, getState) => {
    const {
        auth: { accessToken },
    } = await getState();

    try {
        const { data } = await axios(`sitecorporate/V2/customers/${rut}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            }
        });

        console.log('[fetchCustomers] Response OK >>>>>>', data);
        const customer = data.Customer;
        const segment = customer.customerDetailsSegment;
        const decryptedSegment = aesEncrypt(`${segment}`, "D", `${CRYPTO_KEYS.APP.key}`, CRYPTO_KEYS.APP.iv);
        
        dispatch(setCustomer(data.serviceStatus.codigoEstado, decryptedSegment ));
    } catch (error) {
        console.log('[fetchCustomers] Response Error >>>>>>', error);
        dispatch(setCustomer(SERVER_ERROR, null));

    
    }
};


export const setCustomer = (status, segment) => ({
    type: actionTypes.SET_STATUS_CUSTOMERS,
    statusCode: status,
    segment
});

// Reducer Functions
const setStatusCodeReducer = (state, action) =>
    updateObject(state, { statusCode: action.statusCode, segment: action.segment });

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_STATUS_CUSTOMERS:
            return setStatusCodeReducer(state, action);
        default:
            return state;
    }
};

export default reducer;