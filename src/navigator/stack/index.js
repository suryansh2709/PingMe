import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../modules/Login';
import OtpScreen from '../../modules/Login/otpScreen';
import UserProfile from '../../modules/Login/userProfile';
import Home from '../../modules/Home';
import {string} from '../../utils/strings';
import AddFriend from '../../modules/Home/Chat/addFriend';
import {ChatRoom} from '../../modules/Home/Chat/chatRoom/chatRoom';

const Stack = createNativeStackNavigator();

export function LoginStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, gestureEnabled: false}}
      initialRouteName={string.login}>
      <Stack.Screen name={string.login} component={Login} />
      <Stack.Screen name={string.otp} component={OtpScreen} />
      <Stack.Screen name={string.profile} component={UserProfile} />
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
      <Stack.Screen name={'AddFriend'} component={AddFriend} />
    </Stack.Navigator>
  );
}
