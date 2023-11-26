import * as actionTypes from '../actions/types';
import { updateObject } from '../../../utilities/ObjectTools';
import axios from '../../instances/axios.prod';
import { SERVER_ERROR } from '../../network/status.codes';
import { fetchUpdateSessionData } from './UpdateSessionData.store';

// Initial State
const initialState = {
    estado: null,
};

// Action Creators
export const fetchCustomer = (rut, msisdn, customerInfo) => async (dispatch, getState) => {
    const {
        auth: { accessToken },
    } = await getState();

    try {
        const { data } = await axios(`sitecorporate/V1/customer/${rut}/contacts?userType=I`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            }
        });

        const contact = data.Contacts.find(item => item.contactTypeName === 'Interlocutor');

        dispatch(fetchUpdateSessionData(msisdn, customerInfo, contact));
        dispatch(setStatusCode(data.serviceStatus.codigoEstado));
    } catch (error) {
        console.log('[fetchCustomer] Response Error >>>>>>', error);
        dispatch(setStatusCode(SERVER_ERROR));
    }
};


export const setStatusCode = status => ({
    type: actionTypes.SET_STATUS_CUSTOMER,
    statusCode: status,
});

// Reducer Functions
const setStatusCodeReducer = (state, action) =>
    updateObject(state, { statusCode: action.statusCode });

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_STATUS_CUSTOMER:
            return setStatusCodeReducer(state, action);
        default:
            return state;
    }
};

export default reducer;