export const confirmOtp = (confirm, code, successCallback) => {
  confirm
    ?.confirm(code)
    .then(res => {
      successCallback(res._user);
    })
    .catch(err => {
      console.log(err);
    });
};
