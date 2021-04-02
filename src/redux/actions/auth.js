import {apiPost, setUserData} from '../../utils/utils';
import {SIGNUP, LOGIN, VERIFYOTP} from '../../config/urls';
import ActionType from '../types';
import store from '../store';

export function signUp(data = {}) {
  return new Promise((resolve, reject) => {
    apiPost(SIGNUP, data)
      .then(res => {
        setUserData(res.data);
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function login(data = {}) {
  console.log(data);
  return new Promise((resolve, reject) => {
    apiPost(LOGIN, data)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function verifyOtp(data = {}) {
  console.log(data);
  return new Promise((resolve, reject) => {
    apiPost(VERIFYOTP, data)
      .then(res => {
        setUserData(res.data).then(suc => {
          store.dispatch({
            type: ActionType.LOGIN,
            payload: res.data,
          });
        });

        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export const onLogout = () => ({
  type: ActionType.LOGOUT,

  payload: {},
});
