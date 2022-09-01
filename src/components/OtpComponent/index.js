import {} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {confirmOtpAction} from '../../redux/auth/action';
import {createUser} from '../../utils/commonFunctions';

const OtpComponent = ({confirm, handleLoader, number}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleAfterFill = otp => {
    handleLoader(true);
    dispatch(
      confirmOtpAction(
        confirm,
        otp,
        user => {
          let uid = user?._user?.uid;
          createUser(uid, number);
          handleLoader(false);
          navigation.navigate('Profile');
        },
        () => {
          handleLoader(false);
        },
      ),
    );
  };
  return (
    <OTPInputView
      pinCount={6}
      autoFocusOnLoad={false}
      style={styles.otpViewStyle}
      onCodeFilled={handleAfterFill}
      codeInputFieldStyle={styles.underlineStyleBase}
      codeInputHighlightStyle={styles.underlineStyleHighLighted}
    />
  );
};

export default React.memo(OtpComponent);
