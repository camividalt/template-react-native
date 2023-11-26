import * as actionTypes from '../../../data/services/actions/types';
import {updateObject} from '../../../utilities/ObjectTools';
import axios from "../../instances/axios.prod";
import { SERVER_ERROR } from '../../network/status.codes';

// Initial State
const initialState = {
    statusCode: null
};

// Action Creators   
export const fetchUpdateSessionData = (msisdn, customerInfo, contact) => async (dispatch, getState) => {
    const {
        auth: { accessToken }
    } = await getState();  

    try { 
        const { data } = await axios(`SessionData/V1/Updatesessiondata?CacheName=sessiondata&Key=${accessToken}`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${accessToken}`,
                Origin: 'https://sve.movistar.cl',
                Referer: 'https://sve.movistar.cl/'
            },
            data: 
            {
                sessiondata: {
                    userSession: {
                        cart: false,
                        contactId: contact.contactId+contact.contactIdCode,
                        contactMailAddress: contact.contactMailAddress,
                        contactName: contact.contactName,
                        contactProfile: "",
                        contactTelephoneNumber: contact.contactTelephoneNumberFixer,
                        contactType: contact.contactType
                    },
                    typeAccess: "SSO",
                    diferentialAccess: null,
                    customerSession: {
                        customerAddressName: "",
                        customerDetailsDescription: "",
                        customerDetailsSegment: "MA",
                        customerLegalId: contact.contactId+contact.contactIdCode,
                        customerLegalName: contact.contactName,  
                        customerName: customerInfo.customerSubTypeTitle,
                        executives: [],
                        coliving: {
                            description: "", // AMD
                            status: "" // 2
                        }
                    },
                    numeroLinea: `9${msisdn}`,
                    tipoLinea:"movil",
                    access_token: accessToken,
                    access_tokenAxway: accessToken
                }
            } 
        });

        console.log('[fetchUpdateSessionData] Response OK >>>>>>', data); 
        dispatch(setStatusCode(data?.estado?.codigoEstado));
    } catch (error) {
        console.log('[fetchUpdateSessionData] Response Error >>>>>>', error);
        dispatch(setStatusCode(SERVER_ERROR));
    }
}; 

export const setStatusCode = (status) => ({
    type: actionTypes.SET_UPDATE_SESSION_DATA,
    statusCode: status,
});
 

// Reducer Functions
const setStatusCodeReducer = (state, action) =>
    updateObject(state, { statusCode: action.statusCode });

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_UPDATE_SESSION_DATA:
            return setStatusCodeReducer(state, action);
        default:
            return state;
    }
};

export default reducer;