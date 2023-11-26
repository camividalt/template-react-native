import * as actionTypes from '../../../data/services/actions/types';
import { updateObject } from '../../../utilities/ObjectTools';
import axios from "../../instances/axios.prod";
import { fetchContentKey } from './ContentKey.store';
import { SUCCESS, SERVER_ERROR } from '../../network/status.codes';
import NavigationService from '../../../ui/navigation/NavigationService';


// Initial State
const initialState = {
    accessToken: 'Access Token',
    statusCode: null,
    msisdn: null,
};

// Action Creators
export const fetchLoginPartner = (msisdn) => async (dispatch, getState) => {
    try {
        const { data } = await axios('oauth2/login-partner/loginCajetin?apikey=70dc9b27-dc0f-4ed2-a8fe-1611d91787f8', {
            method: 'POST',
            data: {
                client_secret: 'd28232f4-7cd4-43f0-b266-4848adde13a1',
                client_id: 'b72ee70a-971f-4678-af68-4e4cede65704',
                redirect_uri: 'https://myloginOauth.net/auth-code',
                grant_type: 'authorization_code'
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Accept: 'application/json'
            },
        });

        console.log('[fetchLoginPartner] Response OK >>>>>>', data);
        console.log('[fetchLoginPartner] Response OK >>>>>>', data?.datos.access_token);
        console.log('[fetchLoginPartner] Response OK >>>>>>', data?.estado?.codigoEstado);
        const accessToken = data?.datos?.access_token;

        if (data?.estado?.codigoEstado === SUCCESS) {
            dispatch(fetchContentKey(accessToken, msisdn));
            dispatch(setAccessToken(data, msisdn));
        } else {
            dispatch(setAccessToken(data, msisdn));
        };
    } catch (error) {
        console.log('[fetchLoginPartner] Response Error >>>>>>', error);
        dispatch(setAccessToken(SERVER_ERROR, msisdn));
    }
};

export const logout = () => ({ type: actionTypes.LOGOUT });

const setAccessToken = (payload,msisdn) => ({
    type: actionTypes.SET_ACCESS_TOKEN,
    payload,
    msisdn,
});

// Reducer Functions 
const setAccessTokenReducer = (state, action) => {
    const { payload, msisdn } = action;
    return updateObject(state, {
        accessToken: payload.datos.access_token,
        statusCode: payload.estado.codigoEstado,
        msisdn: msisdn
    });
};

const logoutReducer = (state) => {
    NavigationService.navigateAndReset('SplashScreen');
    return updateObject(state, initialState);
};

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_ACCESS_TOKEN:
            return setAccessTokenReducer(state, action);
        case actionTypes.LOGOUT:
            return logoutReducer(state);
        default:
            return state;
    }
};

export default reducer;