import * as React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import navigationStrings from '../constants/navigationStrings';
import DrawerContent from '../Components/DrawerContent';

import TabRoutes from './TabRoutes';

import {createStackNavigator} from '@react-navigation/stack';
import { Chart, ConversectionUsersList } from '../Screens';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function DrawerRoutes() {
  return (
    <>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen
          name={navigationStrings.TAB_ROUTES}
          component={TabRoutes}
        />
        <Drawer.Screen
          name={navigationStrings.CHART}
          component={Chart}
          options={{headerShown: false}}
        />
        
           <Drawer.Screen
          name={navigationStrings.CONVERSECTION_USERS_LIST}
          component={ConversectionUsersList}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
    </>
  );
}
