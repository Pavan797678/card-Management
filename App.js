import React, {Component} from 'react';
// import SplashScreen from 'react-native-splash-screen'
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';
import Routes from './src/Navigation/Routes';
import store from './src/redux/store';
import {getUserData} from './src/utils/utils';
import types from './src/redux/types';
import SplashScreen from 'react-native-splash-screen'
import requestUserPermission, { messageListener } from './src/utils/notificationServices';



 export default class App extends Component{
  

  componentDidMount(){
    
   
     getUserData().then((res)=>{
       
      if(res){
        store.dispatch({
          type: types.LOGIN,
          payload:res,
        });
      }
     }).catch((error)=>{
       alert(error)
     })
    
    SplashScreen.hide()

     requestUserPermission();
  
  }

render(){
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Routes />
      </Provider>
      <FlashMessage position="top" />
    </SafeAreaProvider>
  );
}

 
};


