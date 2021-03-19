import React, {Component} from 'react';
import { Text, View ,Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Shop,SuperCoin,Cradit,Video,GameZone} from "../Screens/index"
import imagePath from '../constants/imagePath';



const Bottom = createBottomTabNavigator();

function TabRoutes({navigation}) {
  return (
    <Bottom.Navigator>
    <Bottom.Screen
      name="Shop"
      component={Shop}
      options={{
        tabBarLabel: 'Shop',
        tabBarIcon: ({focused, color, size}) => (
          <Image
            source={focused ? imagePath.shop : imagePath.shop}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      }}
    />
    <Bottom.Screen
      name="SuperCoin"
      component={SuperCoin}
      options={{
        tabBarLabel: 'SuperCoin',
        tabBarIcon: ({focused, color, size}) => (
          <Image
          source={focused ? imagePath.chat : imagePath.chat}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      }}
    />
    <Bottom.Screen
      name="Cradit"
      component={Cradit}
      options={{
        tabBarLabel: () => null,
        tabBarIcon: ({focused, color, size}) => (
          <Image
            source={focused ? imagePath.menu_active : imagePath.menu}
            style={{
              width: 50,
              height: 50,
            }}
          />
        ),
      }}
    />
    <Bottom.Screen
      name="Video"
      component={Video}
      options={{
        tabBarLabel: 'Video',
        tabBarIcon: ({focused, color, size}) => (
          <Image
            source={focused ? imagePath.play_active : imagePath.play}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      }}
    />
    <Bottom.Screen
      name="GameZone"
      component={GameZone}
      options={{
        tabBarLabel: 'GameZone',
        tabBarIcon: ({focused, color, size}) => (
          <Image
            source={focused ? imagePath.game_active : imagePath.game}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      }}
    />
  </Bottom.Navigator>
  );
}


export default TabRoutes;