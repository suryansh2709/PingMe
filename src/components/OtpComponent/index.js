import {} from 'react-native';
import React from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import styles from './styles';
const OtpComponent = ({}) => {
  return (
    <OTPInputView
      style={{}}
      pinCount={4}
      autoFocusOnLoad
      codeInputFieldStyle={styles.underlineStyleBase}
      codeInputHighlightStyle={styles.underlineStyleHighLighted}
    />
  );
};

export default OtpComponent;
