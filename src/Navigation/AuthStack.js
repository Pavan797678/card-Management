import React from 'react';
import {LandingPage, Login, OtpVerification, OuterScreen, Signup} from '../Screens';
import navigationStrings from '../constants/navigationStrings';


export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.LANDINGPAGE}
        component={LandingPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.OUTER_SCREEN}
        component={OuterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.SIGN_UP}
        component={Signup}
        
      />
      <Stack.Screen
        name={navigationStrings.LOGIN}
        component={Login}
      
      />
      <Stack.Screen
        name={navigationStrings.OTP_VERIFICATION}
        component={OtpVerification}
        options={{headerShown: false}}
      />

    </>
  );
}
