import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import navigationStrings from '../constants/navigationStrings';
import DrawerContent from '../Components/DrawerContent';

import TabRoutes from "./TabRoutes"



const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
      <>
          <Drawer.Navigator drawerContent={props=><DrawerContent {...props}/>}>
            <Drawer.Screen name={navigationStrings.TAB_ROUTES} component={TabRoutes} />
    
           

          </Drawer.Navigator>
          </>
      );
}