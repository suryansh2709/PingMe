import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../modules/Login';
import OtpScreen from '../../modules/Login/otpScreen';
import UserProfile from '../../modules/Login/userProfile';
import Home from '../../modules/home';
import {ChatRoom} from '../../modules/home/Chat/chatRoom';

const Stack = createNativeStackNavigator();

export function LoginStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'HomeStack'}>
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'Otp'} component={OtpScreen} />
      <Stack.Screen name={'Profile'} component={UserProfile} />
      <Stack.Screen name={'HomeStack'} component={HomeStack} />
    </Stack.Navigator>
  );
}

export function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'ChatRoom'} component={ChatRoom} />
    </Stack.Navigator>
  );
}
