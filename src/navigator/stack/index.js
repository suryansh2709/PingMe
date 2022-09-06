import React from 'react';
import Home from '../../modules/Home';
import Login from '../../modules/Login';
import {string} from '../../utils/strings';
import OtpScreen from '../../modules/Login/otpScreen';
import UserProfile from '../../modules/Login/userProfile';
import AddFriend from '../../modules/Home/Chat/addFriend';
import Profile from '../../modules/Home/Setting/userProfile';
import ChatRoom from '../../modules/Home/Chat/chatRoom/chatRoom';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export function LoginStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, gestureEnabled: false}}
      initialRouteName={string.login}>
      <Stack.Screen name={string.login} component={Login} />
      <Stack.Screen name={string.otp} component={OtpScreen} />
      <Stack.Screen name={string.userProfile} component={UserProfile} />
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
      <Stack.Screen name={string.addFriend} component={AddFriend} />
      <Stack.Screen name={string.profile} component={Profile} />
    </Stack.Navigator>
  );
}
