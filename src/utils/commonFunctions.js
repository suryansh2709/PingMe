import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import {color} from './colors';
import ImageCropPicker from 'react-native-image-crop-picker';
import {Platform} from 'react-native';
import {string} from './strings';
import firestore from '@react-native-firebase/firestore';

export const showToast = message => {
  Snackbar.show({
    text: message,
    textColor: color.white,
    backgroundColor: color.black,
    duration: Snackbar.LENGTH_SHORT,
  });
};

export const getUsers = async (uid, successCallback, failureCallback) => {
  try {
    const querySnap = await firestore()
      .collection('Users')
      .where('id', '!=', uid)
      .get();
    const allUsers = querySnap.docs?.map(docSnap => docSnap.data());
    console.log('alluser', allUsers);
    successCallback(allUsers);
  } catch (err) {
    failureCallback(err);
  }
};

export const addMessagges = async (docId, myMsg) => {
  try {
    firestore()
      .collection(string.homeChatRoom)
      .doc(docId)
      .collection(string.messages)
      .add({...myMsg, createdAt: new Date().getTime()});
  } catch (e) {}
};
export const handleError = code => {
  switch (code) {
    case string.invalidPhoneCase:
      showToast(string.invalidPhoneNumber);
      break;
    case string.tooManyCase:
      showToast(string.requestExceed);
      break;
    case string.networkIsuueCase:
      showToast(string.networkIsuue);
      break;
    case string.invalidOtpCase:
      showToast(string);
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

export async function handleDisplayImage() {
  return ImageCropPicker.openPicker({
    width: 300,
    height: 400,
    cropping: true,
  })
    .then(res => {
      if (Platform.OS === 'ios') {
        return res?.sourceURL;
      } else {
        return res?.path;
      }
    })
    .catch(err => {
      console.log('err', err);
    });
}

export const logOut = async (successCallback, failureCallback) => {
  try {
    const logOutSucces = auth().signOut();
    console.log('logOutSucces', logOutSucces);
    successCallback();
  } catch (err) {
    console.log(err);
    failureCallback(err);
  }
};
