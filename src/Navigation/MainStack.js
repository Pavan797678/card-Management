import React from 'react';
import {CartProduct, Home} from '../Screens';
import navigationStrings from '../constants/navigationStrings';


export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.HOME}
        component={Home}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name={navigationStrings.CARTPRODUCT}
        component={CartProduct}
        options={{headerShown: false}}
      />
     

    </>
  );
}
