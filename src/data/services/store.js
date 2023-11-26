import {createStore, combineReducers, applyMiddleware, } from 'redux';
import {  persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk'

import LoginReducer from './stores/Login.store'; 
import SendCodeReducer from './stores/SendCode.store'; 
import LoginSMSReducer from './stores/LoginSMS.store'; 
import QueryCustomerReducer from './stores/QueryCustomer.store'; 
import UpdateSessionDataReducer from './stores/UpdateSessionData.store'; 
import CustomersReducer from './stores/Customers.store';
import SurveyReducer from './stores/Survey.store'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage, 
};

const appReducer = combineReducers({
    auth: LoginReducer, 
    sendCode: SendCodeReducer, 
    loginSMS: LoginSMSReducer, 
    QueryCustomer: QueryCustomerReducer,
    UpdateSessionData: UpdateSessionDataReducer,
    Customers: CustomersReducer,
    isSurveyAnswered: SurveyReducer
});

function rootReducer(state, action) {
    if (action.type === 'LOGOUT_OTHER') {
        state = undefined;
    }
    return appReducer(state, action);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
export { store };