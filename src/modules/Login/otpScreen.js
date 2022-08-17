import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/commonHeader';
import {string} from '../../utils/strings';
import {styles} from './style';
import OtpComponent from '../../components/OtpComponent';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function OtpScreen() {
  const navigation = useNavigation();
  const [code, setCode] = useState();
  const {confirm} = useRoute().params;
  const handleCodeChange = otp => {
    setCode(otp);
  };
  return (
    <View style={styles.otpMainView}>
      <Header
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.emailTextView}>
        <Text style={styles.enterEmailText}>{string.enterCode}</Text>
        <Text style={styles.confirmPhoneText}>{string.sentOtpTo}</Text>
      </View>
      <OtpComponent handleCodeChange={handleCodeChange} confirm={confirm} />
      <TouchableOpacity activeOpacity={0.6} style={styles.resendCodeView}>
        <Text style={styles.resendCodeText}>{string.resendCode}</Text>
      </TouchableOpacity>
    </View>
  );
}
