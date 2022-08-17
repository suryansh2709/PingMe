import {StyleSheet} from 'react-native';
import {color} from '../../utils/colors';
import {normalize, vw} from '../../utils/dimensions';

export const styles = StyleSheet.create({
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
    backgroundColor: color.white,
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
  buttonView: {justifyContent: 'flex-end', height: normalize(376)},
  otpMainView: {backgroundColor: 'white', flex: 1},
  resendCodeView: {marginTop: normalize(62), alignSelf: 'center'},
  resendCodeText: {color: 'rgba(88, 213, 130, 1)'},
});
