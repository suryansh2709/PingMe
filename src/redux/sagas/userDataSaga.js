import {call, put, takeEvery} from 'redux-saga/effects';
import {confirmOtp} from '../../utils/commonFunctions';
import {string} from '../../utils/strings';
import {setUser} from '../auth/action';

export function* otpConfirm(action) {
  const {confirm, otp, successCallback, failureCallback} = action.payload;
  try {
    const data = yield call(
      confirmOtp,
      confirm,
      otp,
      successCallback,
      failureCallback,
    );
    console.log(data?._user);
    yield put(setUser(data?._user));
  } catch (e) {
    console.log('error', e);
  }
}

export function* watcherFunction() {
  yield takeEvery(string.ConfirmOtp, otpConfirm);
}
