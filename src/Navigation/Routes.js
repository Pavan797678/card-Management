import * as React from 'react';
//import NavigationService from './navigation/NavigationService';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';

import AuthStack from './AuthStack';
import MainStack from './MainStack';

const Stack = createStackNavigator();

function Routes(props) {
  const {logedInUser} = props;
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!logedInUser && AuthStack(Stack)}
        {MainStack(Stack)}
    
     
       
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = function (state) {
  return {
    logedInUser:state.userData
  };
};

export default connect(mapStateToProps)(Routes);
