import * as actionTypes from '../../../data/services/actions/types';
import { updateObject } from '../../../utilities/ObjectTools';
import axios from "../../instances/axios.prod";
import { aesEncrypt } from '../../../utilities/encryptors/AES';
import { CRYPTO_KEYS } from '../../../utilities/constants';
import { SERVER_ERROR } from '../../network/status.codes';
import { fetchCustomers } from './Customers.store';

// Initial State
const initialState = {
    statusQueryData: null,
    rut: null,
    segment: null,
    email: null,
    fullname: null,
    statusValidateData: null,
    validateStatus: null
};


// Action Creators   
export const fetchQueryCustomer = (msisdn, type, rut) => async (dispatch, getState) => {
    const encryptedNumber = aesEncrypt(`569${msisdn}`, "E", `${CRYPTO_KEYS.APP.key}`, CRYPTO_KEYS.APP.iv);
    const encryptedRut = aesEncrypt(rut, "E", `${CRYPTO_KEYS.APP.key}`, CRYPTO_KEYS.APP.iv);

    const {
        auth: { accessToken }
    } = await getState();

    const queryData = {
        customerIdentification: {
            msisdn: {
                number: encryptedNumber
            },
            suscriberId: "U2FsdGVkX19v9hQQ/TPQM0grcPe8wPYpSOc7CpYIJt4=",
            userContactId: "U2FsdGVkX19v9hQQ/TPQM0grcPe8wPYpSOc7CpYIJt4=",
            userContactPrimaryId: "U2FsdGVkX19v9hQQ/TPQM0grcPe8wPYpSOc7CpYIJt4=",
            userContactPrimaryType: "U2FsdGVkX19v9hQQ/TPQM0grcPe8wPYpSOc7CpYIJt4=",
            userContactPrimaryCode: "U2FsdGVkX19v9hQQ/TPQM0grcPe8wPYpSOc7CpYIJt4=",
            primaryContactId: "U2FsdGVkX19v9hQQ/TPQM0grcPe8wPYpSOc7CpYIJt4=",
            primaryContactPrimaryId: "U2FsdGVkX19v9hQQ/TPQM0grcPe8wPYpSOc7CpYIJt4=",
            primaryContactPrimaryType: "U2FsdGVkX19v9hQQ/TPQM0grcPe8wPYpSOc7CpYIJt4=",
            primaryContactPrimaryCode: "U2FsdGVkX19v9hQQ/TPQM0grcPe8wPYpSOc7CpYIJt4=",
            ownerContactId: "U2FsdGVkX19v9hQQ/TPQM0grcPe8wPYpSOc7CpYIJt4=",
            ownerContactPrimaryId: "U2FsdGVkX19v9hQQ/TPQM0grcPe8wPYpSOc7CpYIJt4=",
            ownerContactPrimaryType: "U2FsdGVkX19v9hQQ/TPQM0grcPe8wPYpSOc7CpYIJt4=",
            ownerContactPrimaryCode: "U2FsdGVkX19v9hQQ/TPQM0grcPe8wPYpSOc7CpYIJt4=",
            ownerOrganizationId: "U2FsdGVkX19v9hQQ/TPQM0grcPe8wPYpSOc7CpYIJt4=",
            ownerOrganizationPrimaryId: "U2FsdGVkX19v9hQQ/TPQM0grcPe8wPYpSOc7CpYIJt4=",
            ownerOrganizationPrimaryType: "U2FsdGVkX19v9hQQ/TPQM0grcPe8wPYpSOc7CpYIJt4=",
            ownerOrganizationPrimaryCode: "U2FsdGVkX19v9hQQ/TPQM0grcPe8wPYpSOc7CpYIJt4=",
            customerId: "U2FsdGVkX19v9hQQ/TPQM0grcPe8wPYpSOc7CpYIJt4=",
            maskInfo: [
                "U2FsdGVkX19v9hQQ/TPQM0grcPe8wPYpSOc7CpYIJt4="
            ]
        },
        isToGetCycleCode: "U2FsdGVkX18Ms5T1JtejKk2ofrmGjknuERYQ7ShcrWo%3D"
    };

    const validateStatusData = {
        customerIdentification: {
            msisdn: {
                number: encryptedNumber
            },
            ownerOrganizationId: encryptedRut,
            maskInfo: ["U2FsdGVkX19QgrAfrTMWbONab5XLYpYMSNB2HbrOizQ%3D"]
        },
        isToGetCycleCode: "U2FsdGVkX1%2Bi0ahW9A5YVQuPO8bAyeyDDGB2xeyUp%2BQ%3D"
    };

    const dataBody = type === 'queryData' ? queryData : validateStatusData;

    try {
        const { data } = await axios('customer/V3/queryCustomer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${accessToken}`
            },
            data: dataBody
        });

        console.log('[fetchQueryCustomer] Response OK >>>>>>', data);
        if (type === 'queryData') {
            const customerDataResults = data?.datos?.searchCustomerDataResults[0].customerDataResults;

            const orgInfo = customerDataResults.ownerOrganizationInfo;
            const rut = `${orgInfo.organizationPrimaryId}${orgInfo.organizationIdentificationCode}`;
            const email = customerDataResults.primaryIndividualInfo.email.eMailAddress;
            const fullname = customerDataResults.primaryIndividualInfo.individualName.givenNames + customerDataResults.primaryIndividualInfo.individualName.familyNames;
            const customerInfo = customerDataResults.customerInfo;

            dispatch(fetchCustomers(rut));
            dispatch(setQueryData(data?.estado?.codigoEstado, rut, customerInfo.customerSubTypeTitle, email, fullname));
        } else {
            dispatch(setValidateStatusData(data?.estado?.codigoEstado, data?.datos?.ValidateStatus));
        }
    } catch (error) {
        console.log('[fetchQueryCustomer] Response Error >>>>>>', error);
        type === 'queryData' ? dispatch(setQueryData(SERVER_ERROR)) : dispatch(setValidateStatusData(SERVER_ERROR, 'false'));
    }
};

export const setQueryData = (statusQueryData, rut, segment, email, fullname) => ({
    type: actionTypes.SET_QUERY_CUSTOMER,
    statusQueryData,
    rut,
    segment,
    email,
    fullname
});

export const setValidateStatusData = (statusValidateData, validateStatus) => ({
    type: actionTypes.SET_QUERY_CUSTOMER_VALIDATE_STATUS,
    statusValidateData,
    validateStatus,
});

// Reducer Functions
const setQueryDataReducer = (state, action) =>
    updateObject(state,
        {
            statusQueryData: action.statusQueryData,
            rut: action.rut,
            segment: action.segment,
            email: action.email,
            fullname: action.fullname
        });

const setValidateStatusDataReducer = (state, action) =>
    updateObject(state,
        {
            statusValidateData: action.statusValidateData,
            validateStatus: action.validateStatus,
        });

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_QUERY_CUSTOMER:
            return setQueryDataReducer(state, action);
        case actionTypes.SET_QUERY_CUSTOMER_VALIDATE_STATUS:
            return setValidateStatusDataReducer(state, action);
        default:
            return state;
    }
};

export default reducer;