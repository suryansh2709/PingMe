import {} from 'react-native';
import React from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {confirmOtpAction} from '../../redux/auth/action';
import firestore from '@react-native-firebase/firestore';

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
          console.log('uidddd', user?._user?.uid);
          let uid = user?._user?.uid;
          firestore().collection('Users').doc(uid).set({
            phoneNumber: number,
            id: uid,
          });
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
      pinCount={6}
      autoFocusOnLoad={false}
      style={styles.otpViewStyle}
      onCodeFilled={handleAfterFill}
      codeInputFieldStyle={styles.underlineStyleBase}
      codeInputHighlightStyle={styles.underlineStyleHighLighted}
    />
  );
};

export default OtpComponent;
