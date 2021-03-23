import { apiDelete, apiGet, apiPost, apiPut, getUserData, setUserData } from "../../utils/utils";
import {SIGNUP,LOGIN,VERIFYOTP} from '../../config/urls';



export function signUp(data = {}) {
  return new Promise((resolve,reject)=>{
    apiPost(SIGNUP,data).then(res=>{
      setUserData(res.data)
      
    
      resolve(res);
    }).catch(error=>{
      reject(error);
    })
  })
  
   
  }
  
  export function login(data = {}) {
 console.log(data)
    return new Promise((resolve,reject)=>{
      apiPost(LOGIN,data).then(res=>{
        // setUserData(res.data)
        
        resolve(res);
      }).catch(error=>{
        reject(error);
      })
    })
}


export function verifyOtp(data = {}) {
  console.log(data)
     return new Promise((resolve,reject)=>{
       apiPost(VERIFYOTP,data).then(res=>{
         setUserData(res.data)
         
         resolve(res);
       }).catch(error=>{
         reject(error);
       })
     })
 }