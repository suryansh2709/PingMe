import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {LoginStack} from './stack';
import SplashScreen from '../modules/SplashScreen';
import OtpComponent from '../components/OtpComponent';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
        <Stack.Screen name={'LoginStack'} component={LoginStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
