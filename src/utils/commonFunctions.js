export const confirmOtp = (confirm, code, successCallback) => {
  confirm
    ?.confirm(code)
    .then(res => {
      console.log('res', res);
      successCallback(res?.user);
    })
    .catch(err => {
      console.log(err);
    });
};
