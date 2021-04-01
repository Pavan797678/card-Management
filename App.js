import React, {Component} from 'react';
// import SplashScreen from 'react-native-splash-screen'
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';
import Routes from './src/Navigation/Routes';
import store from './src/redux/store';
import {getUserData} from './src/utils/utils';
import types from './src/redux/types';



 export default class App extends Component{
  

  componentDidMount(){
    
    (async () => {
      const userData = await getUserData();
      store.dispatch({
        type: types.LOGIN,
        payload: {userData},
      });
    })();
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


