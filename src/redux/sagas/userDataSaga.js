import {string} from '../../utils/strings';
import {setUser} from '../auth/action';
import {confirmOtp} from '../../utils/commonFunctions';
import {call, put, takeEvery} from 'redux-saga/effects';

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
