import React, {Component} from 'react';
import { Text, View,Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import imagePath from '../constants/imagePath'
import navigationStrings from '../constants/navigationStrings';
import colors from '../styles/colors';
import { Consult, Home, Login, Profile, Visit, Workout} from '../Screens';



const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen  name={navigationStrings.HOME}
        component={Home}
      options={{
        tabBarLabel: 'Shop',
      
        tabBarIcon: ({focused, color, size}) => (
          <Image
            source={imagePath.shop}
            style={{
              width: size,
              height: size,
              tintColor: focused ? colors.themeColor : 'black',
            }}
            
          />
          
        ),
        
      }} />
      <Tab.Screen name={navigationStrings.CONSULT} component={Consult}
      options={{
        tabBarLabel: 'Consult',
        tabBarIcon: ({focused, color, size}) => (
          <Image
            source={imagePath.chat}
            style={{
              width: size,
              height: size,
              tintColor: focused ? colors.themeColor : 'black',
            }}
          />
        ),
      }}
      />
      
      <Tab.Screen name={navigationStrings.WORKOUT} component={Workout}
      options={{
        tabBarLabel: 'Workout',
       
         
        
        tabBarIcon: ({focused, color, size}) => (
          <Image
            source={imagePath.heartPlush}
            style={{
              width: size,
              height: size,
              tintColor: focused ? colors.themeColor : 'black',
            }} 
          />
        ),
      }} />

<Tab.Screen name={navigationStrings.VISIT} component={Visit}
      options={{
        tabBarLabel: 'Visit',
       
         
        
        tabBarIcon: ({focused, color, size}) => (
          <Image
            source={imagePath.visit}
            style={{
              width: size,
              height: size,
              tintColor: focused ? colors.themeColor : 'black',
            }} 
          />
        ),
      }} />

<Tab.Screen name={navigationStrings.PROFILE} component={Profile}
      options={{
        tabBarLabel: 'Me',
       
         
        
        tabBarIcon: ({focused, color, size}) => (
          <Image
            source={imagePath.user}
            style={{
              width: size,
              height: size,
              tintColor: focused ? colors.themeColor : 'black',
            }} 
          />
        ),
      }} />

      
    </Tab.Navigator>
  );
  
}
