import {View, Text} from 'react-native';
import React from 'react';
import Header from '../../components/commonHeader';
import {string} from '../../utils/strings';
import {styles} from './style';
import OtpComponent from '../../components/OtpComponent';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {normalize} from '../../utils/dimensions';

export default function OtpScreen() {
  const navigation = useNavigation();
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
      <OtpComponent />
      <TouchableOpacity activeOpacity={0.6} style={styles.resendCodeView}>
        <Text style={styles.resendCodeText}>{string.resendCode}</Text>
      </TouchableOpacity>
    </View>
  );
}
