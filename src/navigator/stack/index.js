import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../modules/Login';
import OtpScreen from '../../modules/Login/otpScreen';
import UserProfile from '../../modules/Login/userProfile';
import CustomTab from '../tab';

const Stack = createNativeStackNavigator();

export function LoginStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Tab'}>
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'Otp'} component={OtpScreen} />
      <Stack.Screen name={'Profile'} component={UserProfile} />
      <Stack.Screen name={'Tab'} component={CustomTab} />
    </Stack.Navigator>
  );
}
