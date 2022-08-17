import {View, Text} from 'react-native';
import React from 'react';
import PhoneLogin from './phoneLogin';
import OtpScreen from './otpScreen';

const Login = () => {
  return (
    <View>
      <PhoneLogin />
      <OtpScreen />
    </View>
  );
};

export default Login;
