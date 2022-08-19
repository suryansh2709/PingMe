import {call, put, takeEvery} from 'redux-saga/effects';
import {confirmOtp} from '../../utils/commonFunctions';
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
    console.log('Data', data);
    yield put(setUser(data));
  } catch (e) {
    console.log('error', e);
  }
}

export function* watcherFunction() {
  yield takeEvery('ConfirmOtp', otpConfirm);
}
