import {} from 'react-native';
import React from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import styles from './styles';
import {confirmOtp} from '../../utils/commonFunctions';
import {useNavigation} from '@react-navigation/native';

const OtpComponent = ({handleCodeChange, confirm}) => {
  const navigation = useNavigation();
  const handleChange = code => {
    handleCodeChange(code);
  };
  const handleAfterFill = otp => {
    confirmOtp(confirm, otp, user => {
      console.log('user', user);
      navigation.navigate('Profile');
    });
  };
  return (
    <OTPInputView
      style={styles.otpViewStyle}
      pinCount={6}
      autoFocusOnLoad
      onCodeChanged={handleChange}
      onCodeFilled={handleAfterFill}
      codeInputFieldStyle={styles.underlineStyleBase}
      codeInputHighlightStyle={styles.underlineStyleHighLighted}
    />
  );
};

export default OtpComponent;
