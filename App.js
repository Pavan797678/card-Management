
import React, { useEffect } from 'react';
// import SplashScreen from 'react-native-splash-screen'
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';
import Routes from './src/Navigation/Routes';
import store from './src/redux/store';
import { getUserData } from './src/utils/utils';
import types from './src/redux/types';


const App = () => {
  useEffect(() => {
    (async () => {
      const userData = await getUserData();
      console.log("user data", userData)
      const { dispatch } = store;
      if (userData && !!userData.token) {
        console.log("enter")
        dispatch({
          type: types.LOGIN,
          payload: userData,
        });

      }
      // setTimeout(()=>{
      //   SplashScreen.hide();
      // },600)
      
    })();

    return () => { };
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Routes />
      </Provider>
      <FlashMessage position="top" />
    </SafeAreaProvider>
  );
};


export default App;
