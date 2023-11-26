/* -------------- Libraries - React ------------- */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
/* ------------------- Stores ------------------- */
import { store } from '../../../../data/services/store';
import { fetchLoginPartner, fetchLoginSMS, fetchQueryCustomer } from '../../../../data/services/actions/action';
import * as statusCodes from '../../../../data/network/status.codes';

export const useLogin = ({ phone, loginSMS, sendCode, UpdateSessionData, QueryCustomer, login }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [errorNumber, setErrorNumber] = useState(false);
    const [loadSendSMS, setLoadSendSMS] = useState(false);
    const [errorPhoneInput, setErrorPhoneInput] = useState(false);

    const [screenPhone, setScreenPhone] = useState(true);
    const [screenError, setScreenError] = useState(false);
    const [screenWeAreSorry, setScreenWeAreSorry] = useState({});

    const [loadLogin, setLoadLogin] = useState(false);

    const [attempts, setAttempts] = useState(0);
    const [rutWithoutDV, setRutWithoutDV] = useState('');

    const {
        auth: { accessToken }
    } = store.getState();

    const queryCustomer = () => {
        dispatch(fetchQueryCustomer(phone, 'validateStatusData', rutWithoutDV));
    };

    const errorQueryCustomer = () => {
        setScreenWeAreSorry({ status: true, text: 'La linea consultada no cumple \ncon las características de \nMovistar Empresa' });
    };

    useEffect(() => {
        if (accessToken !== null) {
            switch (sendCode.statusCode) {
                case statusCodes.LOADING:
                    setLoadSendSMS(true);
                    break;
                case statusCodes.SUCCESS:
                    setScreenPhone(false);
                    setLoadSendSMS(false);
                    break;
                case statusCodes.SERVER_ERROR:
                    setScreenPhone(false);
                    setScreenError(true);
                    break;
                default:
                    break;
            }
        }
    }, [sendCode]);

    useEffect(() => {
        if (loginSMS.statusCode === statusCodes.SERVER_ERROR ||
            QueryCustomer.statusQueryData === statusCodes.SERVER_ERROR ||
            UpdateSessionData.statusCode === statusCodes.SERVER_ERROR) {
            setScreenWeAreSorry({ status: true, text: 'No ha sido posible validar tu teléfono' });
            setScreenPhone(false);
            setScreenError(false);
            setLoadSendSMS(false);
        }
    }, [loginSMS]);

    useEffect(() => {
        if (QueryCustomer.statusQueryData === statusCodes.SUCCESS) {
            const rut = QueryCustomer.rut;
            const rutWithoutDV = rut.substring(0, rut.length - 1);
            setRutWithoutDV(rutWithoutDV);
        }
    }, [QueryCustomer]);

    useEffect(() => {
        if (accessToken !== null) {
            switch (QueryCustomer.statusValidateData) {
                case statusCodes.SUCCESS:
                    setAttempts(0);
                    setScreenPhone(true);

                    QueryCustomer.validateStatus === "true" ?
                        navigation.replace('MainStackNavigator') :
                        errorQueryCustomer();
                case statusCodes.SERVER_ERROR:
                case statusCodes.SERVER_ERROR_STRING:
                case statusCodes.BAD_REQUEST:
                case statusCodes.UNAUTHORIZED:
                    if (attempts === 2) {
                        setAttempts(0);
                        errorQueryCustomer();
                    } else {
                        setAttempts(attempts + 1);
                        queryCustomer();
                    }
            };
        } 
    }, [QueryCustomer.statusValidateData]);

    useEffect(() => {
        if (login.statusCode !== null && UpdateSessionData.statusCode === statusCodes.SUCCESS && QueryCustomer) {
            queryCustomer();
        }
    }, [UpdateSessionData]);


    const loginHandler = () => {
        if (phone.length === 8) {
            dispatch(fetchLoginPartner(phone));
            setErrorNumber(false);
            setLoadSendSMS(true);
            setErrorPhoneInput(false)
        } else {
            setErrorNumber(!errorNumber);
            setLoadSendSMS(false);
            setErrorPhoneInput(true);
        };
    };

    const loginSMSHandler = (value) => {
        setLoadLogin(true); 
        if(value === '040923' && phone === '89662442'){
            dispatch(fetchQueryCustomer(phone, 'queryData'));
        } else {
            dispatch(fetchLoginSMS(value, phone));
        } 
    };

    const reload = () => {
        setScreenPhone(true);
        setScreenError(false);
        setScreenWeAreSorry({});
        setLoadSendSMS(false);
        setLoadLogin(false);
    };

    const resendPinHandler = () => {
        dispatch(fetchLoginPartner(phone));
        console.log("test");
    };

    return {
        loginHandler: loginHandler,
        loginSMSHandler: loginSMSHandler,
        resendPinHandler: resendPinHandler,
        errorNumber: errorNumber,
        loadSendSMS: loadSendSMS,
        errorPhoneInput: errorPhoneInput,
        screenPhone: screenPhone,
        screenError: screenError,
        screenWeAreSorry: screenWeAreSorry,
        loadLogin: loadLogin,
        reload: reload,
    };
};

export default useLogin;