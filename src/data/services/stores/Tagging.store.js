import * as actionTypes from '../actions/types';
import {updateObject} from '../../../utilities/ObjectTools';
import axios from '../../instances/axios.prod';
import {SERVER_ERROR} from '../../network/status.codes';

// Initial State
const initialState = {
  estado: null,
};

// Action Creators
export const fetchTagging = () => async (dispatch, getState) => {
  const {
    auth: {accessToken,msisdn},
    QueryCustomer: {rut, email, fullname},
    Customers: {segment}
  } = await getState();


  try {
    const {data} = await axios('log/V1/tagging', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        CodigoCategoria: '0',
        CodigoCliente: '0',
        CodigoContrato: '0',
        DescAplication: 'Usuario',
        DescLog: 'Login APPB2B',
        DesctCategoria: segment,
        IdSession: email,
        NombreServicio: fullname,
        Origen: 'APPB2B',
        Rut: rut,
        Telefono: `9${msisdn}`,
      },
    });

    console.log('[fetchTagging] Response OK >>>>>>', data);
    dispatch(setStatusCode(data.estado.codigoEstado));
  } catch (error) {
    console.log('[fetchTagging] Response Error >>>>>>', error);
    dispatch(setStatusCode(SERVER_ERROR));
  }
};

export const setStatusCode = status => ({
  type: actionTypes.SET_STATUS_TAG,
  statusCode: status,
});

// Reducer Functions
const setStatusCodeReducer = (state, action) =>
  updateObject(state, {statusCode: action.statusCode});

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_STATUS_TAG:
      return setStatusCodeReducer(state, action);
    default:
      return state;
  }
};

export default reducer;