import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <View style={{marginTop: 100}}>
      <TextInput
        placeholder="hello"
        style={{width: '90%', borderColor: 'black', borderRadius: 2}}
      />
    </View>
  );
};

export default Login;
