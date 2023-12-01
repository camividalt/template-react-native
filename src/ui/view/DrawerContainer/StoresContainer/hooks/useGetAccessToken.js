/* -------------- Libraries - React ------------- */
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
/* ------------------- Stores ------------------- */
import {fetchLoginPartner} from '../../../../../data/services/actions/action';
import * as statusCodes from '../../../../../data/network/status.codes';

export const useGetAccessToken = ({phone, login}) => {
  const dispatch = useDispatch();
  const [loadLogin, setLoadLogin] = useState(false);

  const loginHandler = () => {
    dispatch(fetchLoginPartner(phone));
    setLoadLogin(true);
  };

  useEffect(() => {
    switch (login.statusCode) {
      case statusCodes.LOADING:
        setLoadLogin(true);
        break;
      case statusCodes.SUCCESS:
        setLoadLogin(false);
        break;
      case statusCodes.SERVER_ERROR:
        setLoadLogin(false);
        break;
      default:
        break;
    }
  }, [login]);

  return {
    loginHandler: loginHandler,
    loadLogin: loadLogin,
  };
};

export default useGetAccessToken;
