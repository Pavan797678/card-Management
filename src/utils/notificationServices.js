import React from 'react';
import {alert}from 'react-native'

import messaging from '@react-native-firebase/messaging';





export default  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
        getFcmToken()
      console.log('Authorization status:', authStatus);
    }
  }

 const getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
     console.log(fcmToken);
    //  alert(fcmToken)
     console.log("Your Firebase Token is:", fcmToken);
    } else {
     console.log("Failed", "No token received");
    }
  }

  