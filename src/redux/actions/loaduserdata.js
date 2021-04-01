import {
    apiPost,
    getUserData,
    setUserData,
  } from '../../utils/utils';
  import {LOADUSERDATA} from '../../config/urls';


 
  export function loadUserData(data = {}) {
    console.log(getUserData().accessToken,"access token in laodUserData")
     
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
