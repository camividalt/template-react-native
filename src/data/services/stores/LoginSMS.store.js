import * as actionTypes from '../../../data/services/actions/types';
import { updateObject } from '../../../utilities/ObjectTools';
import axios from "../../instances/axios.prod";
import { SERVER_ERROR } from '../../network/status.codes';
import { fetchQueryCustomer } from './QueryCustomer.store';

import AsyncStorage from  '../../../utilities/helpers/AsyncStorage';

// Initial State
const initialState = {
    statusCode: null
};

// Action Creators   
export const fetchLoginSMS = (code, msisdn) => async (dispatch, getState) => {
    const {
        auth: { accessToken }
    } = await getState();

    try {
        const { data } = await axios('oauth2/login-app/v2/loginSMS', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            data: {
                code
            }
        });

        console.log('[fetchLoginSMS] Response OK >>>>>>', data);
        dispatch(setStatusCode(data?.estado?.codigoEstado));
        dispatch(fetchQueryCustomer(msisdn, 'queryData'));
        AsyncStorage.setSurveyCount(msisdn);
    } catch (error) {
        console.log('[fetchLoginSMS] Response Error >>>>>>', error);
        dispatch(setStatusCode(SERVER_ERROR));
    }
};

export const setStatusCode = (status) => ({
    type: actionTypes.SET_LOGIN_SMS,
    statusCode: status,
});


// Reducer Functions
const setStatusCodeReducer = (state, action) =>
    updateObject(state, { statusCode: action.statusCode });

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LOGIN_SMS:
            return setStatusCodeReducer(state, action);
        default:
            return state;
    }
};

export default reducer;