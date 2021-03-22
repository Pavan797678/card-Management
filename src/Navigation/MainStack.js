import React from 'react';
import {CartProduct, Home} from '../Screens';
import navigationStrings from '../constants/navigationStrings';
import TabRoutes from "./TabRoutes";



export default function (Stack) {
  return (
    <>
     <Stack.Screen
      name={navigationStrings.TAB_ROUTES}
      options={{
        headerShown:false
      }}
      component={TabRoutes}
    />
        <Stack.Screen
        name={navigationStrings.CARTPRODUCT}
        component={CartProduct}
        options={{headerShown: false}}
      />
     

    </>
  );
}
