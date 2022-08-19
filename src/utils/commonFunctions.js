import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import {color} from './colors';
import firestore from '@react-native-firebase/firestore';

const showToast = message => {
  Snackbar.show({
    text: message,
    textColor: color.white,
    backgroundColor: color.black,
    duration: Snackbar.LENGTH_SHORT,
  });
};

const handleError = code => {
  switch (code) {
    case 'auth/invalid-phone-number':
      showToast('Invalid Phone Number');
      break;
    case 'auth/too-many-requests':
      showToast('Too many requests');
      break;
    case 'auth/network-request-failed':
      showToast("Can't connent to internet");
      break;
    case 'auth/invalid-verification-code':
      showToast('Invalid Otp');
      break;
  }
};

export async function confirmOtp(
  confirm,
  code,
  successCallback,
  failureCallback,
) {
  try {
    const data = await confirm.confirm(code);
    if (data) {
      console.log('user', data?.user?._user?.uid);
      successCallback(data?.user);
      return data?.user;
    }
  } catch (err) {
    failureCallback();
    console.log('errrr', err);
    handleError(err.code);
  }
}

export async function signInWirhPhoneNumber(
  selected,
  number,
  successCallback,
  failureCallback,
) {
  try {
    const confirmation = await auth().signInWithPhoneNumber(
      '+' + selected + number,
    );
    if (confirmation) {
      successCallback(confirmation);
    }
  } catch (err) {
    failureCallback();
    handleError(err.code);
    console.log(err.code);
  }
}
