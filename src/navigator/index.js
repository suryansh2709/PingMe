import {AppState} from 'react-native';
import {useSelector} from 'react-redux';
import {string} from '../utils/strings';
import {HomeStack, LoginStack} from './stack';
import React, {useEffect, useRef} from 'react';
import SplashScreen from '../modules/SplashScreen';
import firestore from '@react-native-firebase/firestore';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Navigation() {
  const appState = useRef(AppState.currentState);
  const {loggedInUser} = useSelector(store => store.userDataReducer);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === string.active
      ) {
        console.log(loggedInUser);
        firestore()
          .collection(string.users)
          .doc(loggedInUser?.uid)
          .update({
            isActive: true,
          })
          .then(res => console.log('res', res))
          .catch(err => console.log('err', err));
      } else {
        firestore()
          .collection(string.users)
          .doc(loggedInUser?.uid)
          .update({
            isActive: false,
          })
          .then(res => console.log('res', res))
          .catch(err => console.log('err', err));
      }
      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
