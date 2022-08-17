import {} from 'react-native';
import React from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import styles from './styles';
import {confirmOtp} from '../../utils/commonFunctions';
const OtpComponent = ({handleCodeChange, confirm}) => {
  const handleChange = code => {
    handleCodeChange(code);
  };
  const handleAfterFill = otp => {
    confirmOtp(confirm, otp, user => {
      console.log('user', user);
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
