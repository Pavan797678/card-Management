import * as React from 'react';
//import NavigationService from './navigation/NavigationService';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';

import AuthStack from './AuthStack';
import MainStack from './MainStack';



const Stack = createStackNavigator();

export default function Routes(props) {

  const {data}= props
  console.log(data,"async storge data in routes")
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* {AuthStack(Stack)} */}
      {MainStack(Stack)}
       </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = function (state) {
 
  return {
    data: state.Auth.userData
  };
};

 connect(mapStateToProps)(Routes)


