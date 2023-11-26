import * as actionTypes from '../../../data/services/actions/types';
import {updateObject} from '../../../utilities/ObjectTools';
import axios from "./axios.dev";


// Initial State
const initialState = {
    estado: {},
    datos: {}
};

// Action Creators     
export const fetchToken = () => {
    return async () => {
        const PATH = 'oauth2/token';
        await axios({
            method: 'POST',
            url: PATH, 
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Accept: 'application/json' 
            },
            data: {
                client_id: 'b72ee70a-971f-4678-af68-4e4cede65704',
                client_secret: 'd28232f4-7cd4-43f0-b266-4848adde13a1',
                code: 'R85Vlxet',
                redirect_uri: 'https://myloginOauth.net/auth-code',
                grant_type: 'authorization_code'
            }
        }).then(function (response) {
            const {data: {datos, estado}} = response;
            console.log('[fetchToken] Response OK >>>>>>', datos.code);
            console.log('[fetchToken] Response OK >>>>>>', estado.codigoEstado);
        })
        .catch(function (error) {
            console.log('[fetchToken] Response Error  >>>>>>', error);
        });
    }
}; 

export const setAccessToken = access_token => {
    return {
        type: actionTypes.SET_ACCESS_TOKEN,
        access_token
    };
}; 

// Reducer Functions
const setAccessTokenReducer = (state, action) => {
    return updateObject(state, {access_token: action.access_token});
}; 

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_ACCESS_TOKEN:
            return setAccessTokenReducer(state, action);  
        default:
            return state;
    }
};

export default reducer;