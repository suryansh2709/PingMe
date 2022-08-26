import React, {useEffect, useRef} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeStack, LoginStack} from './stack';
import SplashScreen from '../modules/SplashScreen';
import {string} from '../utils/strings';
import {AppState} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

function Navigation() {
  const appState = useRef(AppState.currentState);
  const {loggedInUser} = useSelector(store => store.userDataReducer);
  console.log('dattttttt', loggedInUser);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        firestore().collection('Users').doc(loggedInUser?.uid).update({
          isActive: true,
        });
      } else {
        firestore().collection('Users').doc(loggedInUser?.uid).update({
          isActive: false,
        });
      }
      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const _handleAppStateChange =

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={string.splashScreen} component={SplashScreen} />
        <Stack.Screen name={string.loginStack} component={LoginStack} />
        <Stack.Screen
          options={{gestureEnabled: false}}
          name={string.homeStack}
          component={HomeStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
