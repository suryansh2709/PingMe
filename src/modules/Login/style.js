import {StyleSheet} from 'react-native';
import {color} from '../../utils/colors';
import {normalize, vw, vh} from '../../utils/dimensions';

export const styles = StyleSheet.create({
  userProfileMainView: {flex: 1, backgroundColor: color.white},
  deleteIconView: {
    height: vh(30),
    width: vh(30),
    backgroundColor: color.white,
    padding: 2,
    position: 'absolute',
    borderRadius: 40,
    right: 140,
    borderColor: 'white',
    zIndex: 1,
    opacity: 0.6,
  },
  deleteImage: {zIndex: 1, height: '100%', width: '100%'},
  profilePicView: {
    overflow: 'hidden',
    height: vh(120),
    width: vh(120),
    alignSelf: 'center',
    borderRadius: 90,
    backgroundColor: color.grey,
  },
  profileView: {
    flex: 0.25,
    justifyContent: 'flex-end',
    paddingHorizontal: vw(25),
  },
  textInputView: {flex: 0.45},
  profileImage: {height: '100%', width: '100%'},
  userInputStyle: {marginHorizontal: 25, marginTop: 20},
  emailTextView: {
    height: normalize(86),
    marginHorizontal: normalize(40),
    marginTop: normalize(79),
    justifyContent: 'center',
  },
  enterEmailText: {
    fontSize: normalize(19),
    fontWeight: '500',
    textAlign: 'center',
  },
  confirmPhoneText: {
    fontSize: normalize(14),
    marginTop: normalize(8),
    lineHeight: normalize(22),
    color: '#0F1828',
    textAlign: 'center',
    fontWeight: '300',
  },
  recommendText: {
    marginTop: normalize(44),
    marginLeft: normalize(27),
    fontSize: normalize(14),
    color: color.blue,
  },
  countryCodeView: {
    height: normalize(36),
    marginHorizontal: normalize(24),
    marginTop: normalize(14),
    flexDirection: 'row',
  },
  countryCodeViewStyle: {
    width: normalize(74),
    backgroundColor: '#f7f7fc',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainView: {
    backgroundColor: 'white',
  },
  lineView: {
    width: vw(1),
    height: vw(15),
    backgroundColor: color.black,
  },
  codeStyle: {
    fontSize: normalize(15),
    marginTop: normalize(14),
    lineHeight: 24,
  },
  countryCodeTextView: {
    backgroundColor: '#f7f7fc',
    width: normalize(74),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    height: normalize(36),
  },
  buttonView: {justifyContent: 'flex-end'},
  otpMainView: {backgroundColor: 'white', flex: 1},
  resendCodeView: {marginTop: normalize(62), alignSelf: 'center'},
  resendCodeText: {color: 'rgba(88, 213, 130, 1)'},
  errorStyleView: {
    top: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  errorImg: {
    height: 20,
    width: 20,
  },
  errorText: {
    marginLeft: 5,
    color: 'red',
  },
});
