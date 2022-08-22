import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../modules/Login';
import OtpScreen from '../../modules/Login/otpScreen';
import UserProfile from '../../modules/Login/userProfile';
import {ChatRoom} from '../../modules/Home/Chat/chatRoom';
import Home from '../../modules/Home';
import {string} from '../../utils/strings';

const Stack = createNativeStackNavigator();

export function LoginStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={string.login}>
      <Stack.Screen name={string.login} component={Login} />
      <Stack.Screen name={string.otp} component={OtpScreen} />
      <Stack.Screen name={string.profile} component={UserProfile} />
      <Stack.Screen name={string.homeStack} component={HomeStack} />
    </Stack.Navigator>
  );
}

export function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName={string.home}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={string.home} component={Home} />
      <Stack.Screen name={string.chatRoom} component={ChatRoom} />
    </Stack.Navigator>
  );
}
