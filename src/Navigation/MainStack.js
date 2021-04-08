import React from 'react';
import {CartProduct,  ChatScreen, Home, QrCodeScreen} from '../Screens';
import navigationStrings from '../constants/navigationStrings';

import DrawerRoutes from './DrawerRoutes';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.DRAWER_ROUTES}
        options={{
          headerShown: false,
        }}
        component={DrawerRoutes}
      />

      <Stack.Screen
        name={navigationStrings.CARTPRODUCT}
        component={CartProduct}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name={navigationStrings.QR_CODESCREEN}
        component={QrCodeScreen}
        options={{headerShown: false}}
      />
       <Stack.Screen
          name={navigationStrings.CHAT_SCREEN}
          component={ChatScreen}
          options={{headerShown: false}}
        />
     
    </>
  );
}
