import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Routes from './src/Navigation/Routes';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {moderateScale, textScale} from './src/styles/responsiveSize';
import FlashMessage from 'react-native-flash-message';
import types from './src/redux/types';
import {getFirstTime, getScreenLock, getUserData} from './src/utils/utils';
import fontFamily from './src/styles/fontFamily';
import actions from './src/redux/actions';
import SplashScreen from 'react-native-splash-screen';
import {StatusBar, View} from 'react-native';
import {MoralisProvider} from 'react-moralis';
import {applicationID, serverUrl} from './src/constants/constants';
import Moralis from 'moralis/react-native.js';
import magicLink from './src/config/magicConfig';
import {HelpSupport} from './src/Screens';
const {dispatch} = store;

const App = () => {
  const init = async () => {
    try {
      Moralis.start({
        appId: applicationID,
        serverUrl: serverUrl,
      });
      const userData = await getUserData();
      const isFirstTime = await getFirstTime();
      console.log(userData, 'userData');
      if (!!userData && !!userData.token) {
        console.log('enter');
        dispatch({
          type: types.LOGIN,
          payload: userData,
        });
      }
      if (!!isFirstTime) {
        actions.isFirstTime(true);
      }
      console.log('is first time app.js', isFirstTime);
    } catch (error) {
      console.log(error);
    }
  };

  const loginPIn = () => {
    getScreenLock().then(res => {
      let result = {screenLock: res, isShow: true};
      actions.loginPin(result);
      console.log(res, 'PPPPPPPOLLLLLOCK');
    });
  };

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);
    loginPIn();
    init();
  }, []);

  return (
    <MoralisProvider
      initializeOnMount={true}
      serverUrl={serverUrl}
      appId={applicationID}>
      <Provider store={store}>
        <SafeAreaProvider>
          <Routes />
          {/* <HelpSupport/> */}
          <FlashMessage
            titleStyle={{
              marginRight: moderateScale(5),
              fontFamily: fontFamily.medium,
              fontSize: textScale(16),
            }}
            position="top"
          />
        </SafeAreaProvider>
      </Provider>
    </MoralisProvider>
  );
};

export default App;
