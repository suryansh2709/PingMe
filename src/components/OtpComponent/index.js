import {} from 'react-native';
import React from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {confirmOtpAction} from '../../redux/auth/action';

const OtpComponent = ({handleCodeChange, confirm, handleLoader}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleChange = code => {
    handleCodeChange(code);
  };
  const handleAfterFill = otp => {
    handleLoader(true);
    dispatch(
      confirmOtpAction(
        confirm,
        otp,
        user => {
          console.log('user', user);
          navigation.navigate('Profile');
          handleLoader(false);
        },
        () => {
          handleLoader(false);
        },
      ),
    );
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
