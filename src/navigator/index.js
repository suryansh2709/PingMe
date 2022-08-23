import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeStack, LoginStack} from './stack';
import SplashScreen from '../modules/SplashScreen';
import {string} from '../utils/strings';

const Stack = createNativeStackNavigator();

function Navigation() {
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
