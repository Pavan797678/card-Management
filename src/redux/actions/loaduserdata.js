import {apiGet, apiPost, getUserData, setUserData} from '../../utils/utils';
import {CHATUSERSLIST, GETMESSAGESONETOONE, LOADUSERDATA, SEARCHUSER} from '../../config/urls';

export function loadUserData(data = {}) {
  return new Promise((resolve, reject) => {
    apiPost(LOADUSERDATA, data)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export const searchUsers = data => {
  return apiGet(SEARCHUSER + `?name=${data}`);
};

export const nearByUsers = (long, lat) => {
  return apiGet(SEARCHUSER + `?coordinates=["${long}", "${lat}"]`);
};

export const chatUsersList = (limit, skip) => {
  return apiGet(CHATUSERSLIST+`?limit=`+limit+`&skip=`+skip);
};
export const getUserMessgeOneToOne = (params) => {
  return apiGet(GETMESSAGESONETOONE+params);
};
