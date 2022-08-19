import {string} from '../../utils/strings';

export const confirmOtpAction = (
  confirm,
  otp,
  successCallback,
  failureCallback,
) => {
  return {
    type: string.ConfirmOtp,
    payload: {confirm, otp, successCallback, failureCallback},
  };
};

export const setUser = data => {
  return {
    type: string.SetUser,
    payload: {loggedInUser: data},
  };
};
